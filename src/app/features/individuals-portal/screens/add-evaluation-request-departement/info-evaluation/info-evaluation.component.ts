import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { InputFieldComponent } from '../../../../../shared/components/forms/input-field/input-field.component';
import { SelectFieldComponent } from '../../../../../shared/components/forms/select-field/select-field.component';
import { SharedButtonComponent } from '../../../../../shared/components/forms/shared-button/shared-button.component';
import { TextAreaComponent } from '../../../../../shared/components/forms/text-area/text-area.component';
import { RadioButtonComponent } from '../../../../../shared/components/forms/radio-button/radio-button.component';
import { CancelButtonComponent } from '../../../../../shared/components/forms/cancel-button/cancel-button.component';

@Component({
  selector: 'app-info-evaluation',
  templateUrl: './info-evaluation.component.html',
  styleUrls: ['./info-evaluation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    SelectFieldComponent,
    SharedButtonComponent,
    TextAreaComponent,
    RadioButtonComponent,
    CancelButtonComponent,
    TranslateModule,
  ]
})
export class InfoEvaluationComponent implements OnInit {

  options = [{id: 1, name: 'البيع'}, {id: 2, name: 'الشراء'}, {id: 3, name: 'إستثمار'}, {id: 4, name: 'اخري'}];
  radios = [{value: '1', display: 'نسخة إلكترونية'}, {value: '2', display: 'نسخة ورقية'}];
  radioValue: string = '1';

  infoEvaluation: FormGroup = new FormGroup({});
  senderName: FormControl =  new FormControl('', Validators.required);
  constructor() {}

  ngOnInit() {
    this.initForm();
    console.log(this.infoEvaluation);
  }

  initForm() {
    this.infoEvaluation = new FormGroup({
      senderName1: new FormControl('', Validators.required),
      senderName2: new FormControl('', Validators.required),
      senderName3: new FormControl('', Validators.required),
      senderName4: new FormControl('', Validators.required),
      senderName5: new FormControl('', [Validators.required, Validators.pattern('^\\d*$')]),
      senderName6: new FormControl('', [Validators.required, Validators.pattern('^\\d*$')]),
      senderName7: new FormControl(this.radioValue, Validators.required),
      senderName8: new FormControl(''),
      // senderEmail: new FormControl('', [Validators.required, Validators.email]),
      // senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  submitForm(){
    console.log(this.infoEvaluation);
  }

  getFormGroup(contralName: string): FormControl {
    return this.infoEvaluation?.get(contralName) as FormControl;
  }

  changeRadio(){
    setTimeout(()=>{
      this.radioValue = this.infoEvaluation.get('senderName7')?.value;  
      if(this.radioValue === '2'){
        this.infoEvaluation.get('senderName8')?.setValidators([Validators.required, Validators.pattern('^\\d*$')]);
        this.infoEvaluation.get('senderName8')?.updateValueAndValidity();
      }
        
      else{
        this.infoEvaluation.get('senderName8')?.clearValidators();
        this.infoEvaluation.get('senderName8')?.updateValueAndValidity();
      }
    }, 10);
    
    
  }

}
