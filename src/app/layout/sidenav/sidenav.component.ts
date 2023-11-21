import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import CustomMenuItem, { MenuNavFunction, navbarData } from './nav-data';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

import {
  AuthService,
  ConfigStateService,
  CurrentUserDto,
  LanguageInfo,
  LocalizationService,
  NAVIGATE_TO_MANAGE_PROFILE,
  SessionStateService,
} from '@abp/ng.core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ChangeDirService } from 'src/app/shared/services/change-dir.service';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

export interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [DialogService],
})
export class SidenavComponent implements OnInit {
  collapsed = false;
  navData = navbarData;
  screenWidth = 0;
  ref: DynamicDialogRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 768) {
      this.collapsed = false;

      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }
  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter<sideNavToggle>();

  constructor(
    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile,
    private configState: ConfigStateService,
    private authService: AuthService,
    private sessionState: SessionStateService,
    @Inject(DOCUMENT) public document,

    public dialogService: DialogService,
    public ChangeDirService: ChangeDirService,
    private breadcrumb: BreadcrumbService,
    private localizationService: LocalizationService

  ) {
    const currentRoute = window.location.pathname;
    this.setSelectedState(this.navData, currentRoute);
    let parent= this.navData.find(x=>x.selected && x.items?.length>0 )
    let child=this.navData.find(x=>x.selected && x.items?.length>0 )?.items.find(x=>x.routerLink==currentRoute)
    this.setCrumbs(parent,child)
  }
  setSelectedState(items: CustomMenuItem[], currentRoute: string): boolean {
    
    let foundSelected = false;

    items.forEach(item => {
      if (item.routerLink === currentRoute) {
        item.selected = true;
        foundSelected = true;
        console.log(items , currentRoute);
      } else {
        item.selected = false;
      }

      if (item.items && item.items.length > 0) {
        const childSelected = this.setSelectedState(item.items, currentRoute);
        if (childSelected) {
          item.selected = true;
          foundSelected = true;
          console.log(items , childSelected);

          this.getChildren(item);
          // this.setCrumbs(ParentItem, SelectedItem);

        }
      }
    });

    return foundSelected;
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    const currentRoute = window.location.pathname;
    this.setSelectedState(this.navData, currentRoute);
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  childern: [] = [];
  getChildren(data) {
    this.collapsed = true;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    this.childern = data.items;
  }
  getActiveParent(SelectedItem) {
    this.navData.forEach(ParentItem => {
      if (ParentItem.items.find(x => x.routerLink == SelectedItem.routerLink) != null) {
        ParentItem.active = true;
        ParentItem.selected = true;
        this.setCrumbs(ParentItem, SelectedItem);
      } else {
        ParentItem.active = false;
        ParentItem.selected = false;
      }
    });
    this.closeSidenav();
  }
  setCrumbs(ParentItem, SelectedItem) {
    console.log(ParentItem, SelectedItem);
    
    if (ParentItem == null || SelectedItem==null) {
      this.breadcrumb.setCrumbs([null])
    }
  else if (ParentItem.label == SelectedItem.label) {
      setTimeout(() =>
        this.breadcrumb.setCrumbs([
          {
            label: this.localizationService.instant('::'+SelectedItem.label),
            routerLink: SelectedItem.routerLink,
          },
        ])
      );
    } else {
      setTimeout(() =>
        this.breadcrumb.setCrumbs([
          {
            label: this.localizationService.instant('::'+ParentItem.label),

            routerLink: ParentItem.routerLink,
          },
          {
            label: this.localizationService.instant('::'+SelectedItem.label),
            routerLink: SelectedItem.routerLink,
          },
        ])
      );
    }
  }
  ExcuteNav(fun: MenuNavFunction) {
    switch (fun) {
      case MenuNavFunction.AddProvider:
        break;
      default:
        break;
    }
  }

  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  selectedTenant$ = this.sessionState.getTenant$();

  languages$: Observable<LanguageInfo[]> = this.configState.getDeep$('localization.languages');

  get smallScreen(): boolean {
    return window.innerWidth < 992;
  }

  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName
      )
    );
  }
  get dropdownLanguages$(): Observable<LanguageInfo[]> {
    return this.languages$.pipe(
      map(languages => languages.filter(lang => lang.cultureName !== this.selectedLangCulture))
    );
  }
  get selectedLangCulture(): string {
    return this.sessionState.getLanguage();
  }

  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }

  navigateToLogin() {
    this.authService.navigateToLogin();
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
