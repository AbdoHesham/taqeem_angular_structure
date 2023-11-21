import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AnonymousLayoutComponent } from './anonymous-layout/anonymous-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConnectionLostComponent } from './connection-lost/connection-lost.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AnonymousLayoutComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingComponent,
    PageNotFoundComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  exports:[SidenavComponent],
  imports: [ LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
