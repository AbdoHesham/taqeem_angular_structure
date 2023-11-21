import { PatientModule } from './../paient/paient.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PermissionGuard } from '@abp/ng.core';

const routes: Routes = [


  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () => import('../../app/home/home.module').then(m => m.HomeModule),
        canActivate: [PermissionGuard],
      },
      // {
      //   path: 'providers',
      //   pathMatch: 'full',
      //   loadChildren: () =>
      //     import('../../app/provider/provider.module').then(m => m.ProviderModule),
      // },
      {
        path: 'Doctors',
        pathMatch: 'full',
        loadChildren: () => import('../../app/doctor/doctor.module').then(m => m.DoctorModule),
        canActivate: [PermissionGuard],
      },
      {
        path: 'Schedule',
        loadChildren: () =>
          import('../../app/schedule/schedule.module').then(m => m.ScheduleModule),
         
      },
      {
        path: 'ServiceFees',
        loadChildren: () =>
          import('../../app/service-fees/service-fees.module').then(m => m.ServiceFeesModule),
          canActivate: [PermissionGuard],
      },

      {
        path: 'identity',
        loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
        canActivate: [PermissionGuard],

      },
      {
        path: 'tenant-management',
        loadChildren: () =>
          import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
          canActivate: [PermissionGuard],

      },
      {
        path: 'setting-management',
        loadChildren: () =>
          import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
          canActivate: [PermissionGuard],

      },

      {
        path: 'Provider',
        loadChildren: () =>
          import('../../app/provider/provider.module').then(m => m.ProviderModule),
          canActivate: [PermissionGuard],

      },
      {
        path: 'appointment',
        loadChildren: () =>
          import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
          canActivate: [PermissionGuard],

      },
      {
        path: 'patient',
        loadChildren: () => import('../paient/paient.module').then(m => m.PatientModule),
        canActivate: [PermissionGuard],
      },
      {
        path: 'notification/:purpose',
        loadChildren: () =>
          import('../notification/notification.module').then(m => m.NotificationModule),
          canActivate: [PermissionGuard],
      },
      {
        path: 'SetupScreen',
        loadChildren: () =>
          import('../setup-screen/setup-screen.module').then(m => m.SetupScreenModule),
          
      },
      {
        path: 'SurveySetup',
        loadChildren: () =>
          import('../survey-setup/survey-setup.module').then(m => m.SurveySetupModule),
          canActivate: [PermissionGuard],
      },
      {
        path: 'promotion',
        loadChildren: () => import('../Promotionn/promotion.module').then(m => m.PromotionModule),
        canActivate: [PermissionGuard],
      },
      {
        path: 'Article',
        loadChildren: () => import('../article/article.module').then(m => m.ArticleModule),
        canActivate: [PermissionGuard],
      },
    ],
  },

  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },

  // {
  //   path: 'identity',
  //   loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  // },

  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
