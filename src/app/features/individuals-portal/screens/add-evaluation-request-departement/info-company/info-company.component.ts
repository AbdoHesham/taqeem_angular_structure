import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedButtonComponent } from '../../../../../shared/components/forms/shared-button/shared-button.component';
import { CancelButtonComponent } from '../../../../../shared/components/forms/cancel-button/cancel-button.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { InputFieldComponent } from '../../../../../shared/components/forms/input-field/input-field.component';
import { SelectFieldComponent } from '../../../../../shared/components/forms/select-field/select-field.component';
import { RadioButtonComponent } from '../../../../../shared/components/forms/radio-button/radio-button.component';

import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.component.html',
  styleUrls: ['./info-company.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    SharedButtonComponent,
    CancelButtonComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    InputFieldComponent,
    SelectFieldComponent,
    RadioButtonComponent,
    MatDividerModule,
  ],
})
export class InfoCompanyComponent implements OnInit {

  options = [{id: 1, name: 'منشأة 1'}, {id: 2, name: 'منشأة 2'}, {id: 3, name: 'منشأة 3'}, {id: 4, name: 'منشأة 4'}];
  options1 = [{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 3, name: '3'}, {id: 4, name: '4'}, {id: 5, name: '5'}];
  options2 = [{id: 1, name: 'الاقل سعرا'}, {id: 2, name: 'الاسرع في التنفيذ'}, {id: 3, name: 'الاعلي جودة'}];
  options3 = [{id: 1, name: '+966'}, {id: 2, name: '+249'}, {id: 3, name: '+974'}];
  options4 = [{id: 1, name: 'الهوية الوطنية'}, {id: 2, name: 'مقيم'}, {id: 3, name: 'زائر'}];
  radios = [{value: '1', display: 'اختيار العروض تلقائياً'}, {value: '2', display: 'اختيار العروض يدوياً'}];
  radios1 = [{value: '1', display: 'نعم ، سيتم الدفع عن طريق شخص آخر'}, {value: '2', display: 'لا ، سأقوم أنا بالدفع'}];

  radioValue: string = '0';
  radioValue1: string = '0';

  companyData: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.companyData = new FormGroup({
      senderName1: new FormControl('', Validators.required),
      senderName2: new FormControl('', Validators.required),
      senderName3: new FormControl('', Validators.required),
      senderName4: new FormControl(''),
      senderName5: new FormControl(''),
      senderName6: new FormControl('', Validators.required),
      senderName7: new FormControl(''),
      senderName8: new FormControl(''),
      senderName9: new FormControl(''),
      senderName10: new FormControl(''),
      senderName11: new FormControl(''),
    });
  }

  submitForm(){
  }

  getFormGroup(contralName: string): FormControl {
    return this.companyData?.get(contralName) as FormControl;
  }

  changeRadio(){
    setTimeout(()=>{
      this.radioValue = this.companyData.get('senderName3')?.value;
      console.log(this.radioValue);
      if(this.radioValue === '1'){
        this.companyData.get('senderName4')?.setValidators([Validators.required]);
        this.companyData.get('senderName4')?.updateValueAndValidity();
        this.companyData.get('senderName5')?.setValidators([Validators.required]);
        this.companyData.get('senderName5')?.updateValueAndValidity();
      }
        
      else{
        this.companyData.get('senderName4')?.clearValidators();
        this.companyData.get('senderName4')?.updateValueAndValidity();
        this.companyData.get('senderName5')?.clearValidators();
        this.companyData.get('senderName5')?.updateValueAndValidity();
      }
    }, 10);
  }

  changeRadio1(){
    setTimeout(()=>{
      this.radioValue1 = this.companyData.get('senderName6')?.value;
      console.log(this.radioValue);
      if(this.radioValue1 === '1'){
        this.companyData.get('senderName7')?.setValidators([Validators.required]);
        this.companyData.get('senderName7')?.updateValueAndValidity();
        this.companyData.get('senderName8')?.setValidators([Validators.required]);
        this.companyData.get('senderName8')?.updateValueAndValidity();
        this.companyData.get('senderName9')?.setValidators([Validators.required, Validators.pattern('^\\d*$')]);
        this.companyData.get('senderName9')?.updateValueAndValidity();
        this.companyData.get('senderName10')?.setValidators([Validators.required]);
        this.companyData.get('senderName10')?.updateValueAndValidity();
        this.companyData.get('senderName11')?.setValidators([Validators.required]);
        this.companyData.get('senderName11')?.updateValueAndValidity();
      }
        
      else{
        this.companyData.get('senderName7')?.clearValidators();
        this.companyData.get('senderName7')?.updateValueAndValidity();
        this.companyData.get('senderName8')?.clearValidators();
        this.companyData.get('senderName8')?.updateValueAndValidity();
        this.companyData.get('senderName9')?.clearValidators();
        this.companyData.get('senderName9')?.updateValueAndValidity();
        this.companyData.get('senderName10')?.clearValidators();
        this.companyData.get('senderName10')?.updateValueAndValidity();
        this.companyData.get('senderName11')?.clearValidators();
        this.companyData.get('senderName11')?.updateValueAndValidity();
      }
    }, 10);
  }
}
