import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainLayoutComponent,
    PageNotFoundComponent,
    SidenavComponent,
    
  ],
  exports: [],
  imports: [LayoutRoutingModule, SharedModule,CommonModule,HttpClientModule],
})
export class LayoutModule {}
