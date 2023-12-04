import { TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
import { Option } from '../../../../shared/Models/option';
import { CancelButtonComponent } from '../../../../shared/components/forms/cancel-button/cancel-button.component';
import { SelectFieldComponent } from '../../../../shared/components/forms/select-field/select-field.component';
@Component({
  selector: 'app-national-address',
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
    SelectFieldComponent,
    DatePickerComponent,
    CancelButtonComponent,
    TranslateModule,
  ],
  templateUrl: './national-address.component.html',
  styleUrl: './national-address.component.scss',
})
export class NationalAddressComponent {
  form!: FormGroup;
  options: Option[] = [
    { id: '1', name: 'البيع' },
    { id: '2', name: 'الشراء' },
    { id: '3', name: 'الاسثتمار' },
    { id: '4', name: 'اخري' },
  ];
  constructor(private fb: FormBuilder, private router: Router) {}
  @Output() callParrentToGoToNextStep: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() callParrentToGoToPrevStep: EventEmitter<void> =
    new EventEmitter<void>();

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      city: new FormControl(null, [Validators.required]),
      district: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      buildingNumber: new FormControl(null, [Validators.required]),
      additionalNumber: new FormControl(null, [Validators.required]),
      postalCode: new FormControl(null, [Validators.required]),
      nationalAbbreviatedAddress: new FormControl(null, [Validators.required]),
      nationalIdImg: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.router.navigateByUrl('auth/login');
  }

  submit() {
    console.log(this.form.value);
    this.callParrentToGoToNextStep.emit();
  }

  back(){
    this.callParrentToGoToPrevStep.emit();

  }
  gotoVerficationCode() {
    this.router.navigateByUrl('signup/verfication-code/absher');
  }
}
