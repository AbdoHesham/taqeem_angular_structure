import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    HomeComponent,ProductDetailsComponent, ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
