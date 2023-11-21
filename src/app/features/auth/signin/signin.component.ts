import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { InputValidation } from '../../../shared/utils/InputValidation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent  {
  password: any;
  show = false;
  public CustomControler: any;
  form :FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
      Validators.pattern(InputValidation.complexPassword),
    ]),
  });
  changePassword: boolean=false;
  
  get f() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private spinner: NgxSpinnerService,
    // private permissionsService:NgxPermissionsService
  ) {}

  ngOnInit() {
  }


  submit() {
    let body: any = {
      username: this.form.get('email')?.value.trim(),
      password: this.form.get('password')?.value.trim(),
    };

  
  }
  ngOnDestroy() {}


}
