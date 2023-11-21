
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { InputValidation } from '../../../shared/utils/InputValidation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  password: any;
  show = false;
  public CustomControler: any;
  form!: FormGroup;
  changePassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) 
  {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.pattern(InputValidation.complexPassword),
      ]),
    });
  }

  login(){
    this.router.navigateByUrl('/auth/login')
  }

  submit() {
    let body: any = {
      username: this.form.get('email')?.value.trim(),
      password: this.form.get('password')?.value.trim(),
    };
    this.router.navigateByUrl('/layout')
  }
  ngOnDestroy() {}
}
