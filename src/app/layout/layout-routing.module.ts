import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full',
    //   },
    //   {
    //     path: 'dashboard',
    //     pathMatch: 'full',
    //     loadChildren: () =>
    //       import('../../app/home/home.module').then((m) => m.HomeModule),
    //   },
    // ],
  },

  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
