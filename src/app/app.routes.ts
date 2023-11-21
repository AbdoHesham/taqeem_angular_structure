import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' }, // Updated redirect path

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  
];
