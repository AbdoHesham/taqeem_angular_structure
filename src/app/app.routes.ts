import { SuadiSignupComponent } from './features/auth/suadi-signup/suadi-signup.component';
import { Routes } from '@angular/router';
import { IndividualsPortalComponent } from './features/individuals-portal/individuals-portal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/signin/signin.component').then(
        (m) => m.SigninComponent
      ),
  },
  {
    path: 'auth/login/nfaz',
    loadComponent: () =>
      import('./features/auth/login-via-nfaz/login-via-nfaz.component').then(
        (m) => m.LoginViaNfazComponent
      ),
  },
  
  {
    path: 'signup',
    loadComponent: () =>
      import('./features/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'auth/signup/suadi-citizen',
    loadComponent: () =>
      import('./features/auth/suadi-signup/suadi-signup.component').then(
        (m) => m.SuadiSignupComponent
      ),
  },
  {
    path: 'signup/verfication-code/:id',
    loadComponent: () =>
      import('./features/auth/verfication-code/verfication-code.component').then(
        (m) => m.VerficationCodeComponent
      ),
  },
  {
    path: 'signup/recover-info',
    loadComponent: () =>
      import('./features/auth/recover-info-stepper/recover-info-stepper.component').then(
        (m) => m.RecoverInfoStepperComponent
      ),
  },

  {
    path: 'individuals',
    component: IndividualsPortalComponent,
  },
];
