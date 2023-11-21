import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
// import { ChangePasswordComponent } from './change-password/change-password.component';
// import { OTPFormComponent } from './otp-form/otp-form.component';
// import { LicenseFormComponent } from './license-form/license-form.component';
// import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
      {
        path: '',
        component: SigninComponent,
      },
      // {
      //   path: 'change-password',

      //   component: ChangePasswordComponent,
      // },
      // {
      //   path: 'signup',
      //   component: SignupComponent,
      // },
      // {
      //   path: 'forgetpassword',
      //   component: ForgetpasswordComponent,

      // },
      // {
      //   path: 'otp',
      //   component: OTPFormComponent,
      // },
      // {
      //   path: 'license',
      //   component:  LicenseFormComponent
      // },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
