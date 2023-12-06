import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SharedButtonComponent } from '../../../shared/components/forms/shared-button/shared-button.component';
import { InputValidation } from '../../../shared/utils/InputValidation';
import { InputFieldComponent } from '../../../shared/components/forms/input-field/input-field.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePickerComponent } from '../../../shared/components/forms/date-picker/date-picker.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChangeDirService } from '../../../shared/services/change-dir.service';
@Component({
  selector: 'app-suadi-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    SharedButtonComponent,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    DatePickerComponent,
    TranslateModule,
    DatePickerComponent
  ],
  templateUrl: './suadi-signup.component.html',
  styleUrl: './suadi-signup.component.scss',
  providers: [ChangeDirService],
})
export class SuadiSignupComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    public changeLangService: ChangeDirService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nationalId: new FormControl(null, [Validators.required]),
      DOP: new FormControl(null, [Validators.required]),
      imageCode: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.router.navigateByUrl('auth/login');
  }

  submit() {
    console.log(this.form.value);
    this.gotoVerficationCode()
  }

  gotoVerficationCode() {
    this.router.navigateByUrl('signup/verfication-code/absher');
  }
  signUp(){
    
  }
}
