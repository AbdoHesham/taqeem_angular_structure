import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from '../../core/guard/auth.guard';
// import { authGuard } from '../../core/guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
