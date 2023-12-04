import { TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { Component, Output ,EventEmitter} from '@angular/core';
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
import { SharedButtonComponent } from '../../../../shared/components/forms/shared-button/shared-button.component';
import { InputValidation } from '../../../../shared/utils/InputValidation';
import { InputFieldComponent } from '../../../../shared/components/forms/input-field/input-field.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePickerComponent } from '../../../../shared/components/forms/date-picker/date-picker.component';
import { TextAreaComponent } from '../../../../shared/components/forms/text-area/text-area.component';
import { RadioButtonComponent } from '../../../../shared/components/forms/radio-button/radio-button.component';
import { CancelButtonComponent } from '../../../../shared/components/forms/cancel-button/cancel-button.component';
import { SelectFieldComponent } from '../../../../shared/components/forms/select-field/select-field.component';
import { TitleFormComponent } from '../../../../shared/components/forms/title-form/title-form.component';
import { Option } from '../../../../shared/Models/option';
@Component({
  selector: 'app-personal-info',
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
    TitleFormComponent,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    SelectFieldComponent,
    SharedButtonComponent,
    TextAreaComponent,
    RadioButtonComponent,
    CancelButtonComponent,
    TranslateModule
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  form!: FormGroup;
  options:Option[]=[
    {id:'1' ,name:'البيع'},
    {id:'2' ,name:'الشراء'},
    {id:'3' ,name:'الاسثتمار'},
    {id:'4' ,name:'اخري'},

  
  ];
  constructor(private fb: FormBuilder, private router: Router) {}
  @Output() callParrentToGoToNextStep: EventEmitter<void> = new EventEmitter<void>();
  @Output() callParrentToGoToPrevStep: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      nameAr: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.ArabicRegx),
      ]),
      nameEn: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.EnglishRegx),
      ]),
      IDType: new FormControl(null, [Validators.required]),
      IDNumber: new FormControl(null, [Validators.required]),
      nationality: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      DOPGregorian: new FormControl(null, [Validators.required]),
      DOPHijri: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.validEmail),
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.MobileKSApattern),
      ]),
      passward: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.complexPassword),
      ]),
      confirmPassward: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.complexPassword),
      ]),
    });
  }

  login() {
    this.router.navigateByUrl('auth/login');
  }

  submit() {
    console.log(this.form.value);
    this.callParrentToGoToNextStep.emit(undefined);
  }

  gotoVerficationCode() {
    this.router.navigateByUrl('signup/verfication-code/absher');
  }
}
