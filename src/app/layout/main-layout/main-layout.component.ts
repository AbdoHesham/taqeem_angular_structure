// import { AuthService, ConfigStateService, CurrentUserDto } from '@abp/ng.core';
import { Component, Input, Inject, ViewChild } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { sideNavToggle } from '../sidenav/sidenav.component';
// import { ChangeDirService } from 'src/app/shared/services/change-dir.service';
// import { MenuItem } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChangeDirService } from '../../shared/services/change-dir.service';
// import { Breadcrumb } from 'primeng/breadcrumb';
// import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  // currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  // items: MenuItem[] | undefined;

  // home: MenuItem | undefined;
  // menuItems: MenuItem[] | undefined;
  // crumbs$: Observable<MenuItem[]>;
    
  constructor(
    // private configState: ConfigStateService,
    public ChangeDirService: ChangeDirService,
    // private authService: AuthService,
    // private breadcrumb: BreadcrumbService
  ) {}

  ngOnInit(){

    // this.home = { icon: 'pi pi-home',  command: event => {
    //  this.breadcrumb.setCrumbs(null)
    // }, routerLink: '/' };
  
    // this.crumbs$ = this.breadcrumb.crumbs$;
    
  }

  
  isSidenavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: sideNavToggle) {
    this.isSidenavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.isSidenavCollapsed && this.screenWidth > 768) {
      styleClass = 'content-trimmed';
    } else if (this.isSidenavCollapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'content-md-screen';
    }
    return styleClass;
  }


  
  login() {
    // this.authService.navigateToLogin();
  }
//  this.authService.logout();

  get hasLoggedIn(): boolean {
     return true;
  }
}
