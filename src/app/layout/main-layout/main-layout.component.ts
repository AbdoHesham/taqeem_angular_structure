import { Component, Input, Inject, ViewChild } from '@angular/core';
import { sideNavToggle } from '../sidenav/sidenav.component';
import { ChangeDirService } from '../../shared/services/change-dir.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(public ChangeDirService: ChangeDirService) {}

  ngOnInit() {}

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
    } else if (
      this.isSidenavCollapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'content-md-screen';
    }
    return styleClass;
  }

  login() {
    // this.authService.navigateToLogin();
  }

  get hasLoggedIn(): boolean {
    return true;
  }
}
