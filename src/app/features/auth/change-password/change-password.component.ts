
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {
  // public routes = routes;
 
  // userCredentials: {} = {};
  // show: boolean = false;
  // show2: boolean = false;
  // show3: boolean = false;

  // data: any;
  // public CustomControler: any;
  // form :FormGroup = new FormGroup(      {
  //   oldPassword: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(50),
  //     Validators.pattern(Patterns.complexPassword),
  //   ]),
  //   newPassword: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(50),
  //     Validators.pattern(Patterns.complexPassword),
  //   ]),
  //   passwordConfirm: new FormControl('', [Validators.required]),
  // },
  // [CustomValidatorsService.MatchValidator('newPassword', 'passwordConfirm')]);
  // changePassword: boolean;
  
  // get f() {
  //   return this.form.controls;
  // }

  // constructor(
  //   private fb: FormBuilder,
  //   public SharedService: SharedService,
  //   private router: Router,
  //   private alertifyService: AlertifyService,
  //   private AuthService: AuthService,
  //   private permissionsService:NgxPermissionsService
  // ) {}


  // get passwordMatchError() {
  //   return (
  //     this.form.getError('mismatch') &&
  //     this.form.get('passwordConfirm')?.touched
  //   );
  // }
  // changePass() {
  //   let body: changePass = {
  //     email: JSON.parse(localStorage.getItem('nextdriven_user') || '{}').email,
  //     currentPassword: this.form.get('oldPassword')?.value.trim(),
  //     newPassword: this.form.get('newPassword')?.value.trim(),
  //     confirmedNewPassword: this.form.get('passwordConfirm')?.value.trim(),
  //   };
  //   // const Roles =[]
  //   this.AuthService.ChangePassword(body).subscribe(
  //     (response: ResponseDto) => {
  //       if (response.isPassed == true) {
  //         this.alertifyService.success('you are logged In successfully ');
  //         localStorage.setItem('changePassword', JSON.stringify(true));

  //         if (
  //           JSON.parse(localStorage.getItem('Role') || '{}').includes(
  //             'MasterAdmin'
  //           )
  //         ) {
  //           this.router.navigate(['/auth/otp']);

  //         } else {
  //           this.router.navigateByUrl('/dashboard');
  //         }
  //       } else {
  //         this.alertifyService.error(response.message);

  //       }
  //     },
  //     (error: Error) => {
  //       this.alertifyService.error('technical error ');
  //     }
  //   );
  // }
  
}
