import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import CustomMenuItem, { MenuNavFunction, navbarData } from './nav-data';


export interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [],
})
export class SidenavComponent implements OnInit {
  collapsed = false;
  navData = navbarData;
  screenWidth = 0;
  showFiller = false;

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
  ) {

  }

  ngOnInit(): void {
    // this.screenWidth = window.innerWidth;

    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }


}
