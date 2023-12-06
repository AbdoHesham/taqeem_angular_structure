import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { SharedButtonComponent } from '../../../../../../shared/components/forms/shared-button/shared-button.component';
import { CancelButtonComponent } from '../../../../../../shared/components/forms/cancel-button/cancel-button.component';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { InputFieldComponent } from '../../../../../../shared/components/forms/input-field/input-field.component';
import { SelectFieldComponent } from '../../../../../../shared/components/forms/select-field/select-field.component';
import { RadioButtonComponent } from '../../../../../../shared/components/forms/radio-button/radio-button.component';
import { SharedMapComponent } from '../../../../../../shared/components/shared-map/shared-map.component';

@Component({
  selector: 'app-dialog-add-manual',
  templateUrl: './dialog-add-manual.component.html',
  styleUrls: ['./dialog-add-manual.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    TranslateModule,
    SharedButtonComponent,
    CancelButtonComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    InputFieldComponent,
    SelectFieldComponent,
    RadioButtonComponent,
    SharedMapComponent
  ],
})
export class DialogAddManualComponent implements OnInit {
  
  options1 = [{id: 1, name: 'أرض فضاء'}, {id: 2, name: 'مبني'}];
  options = [{id: 1, name: 'سكني'}, {id: 2, name: 'تجاري'}, {id: 3, name: 'إستثمار'}, {id: 4, name: 'اخري'}];
  options3 = [{id: 1, name: 'الرياض'}, {id: 2, name: 'مكة'}, {id: 3, name: 'جدة'}, {id: 4, name: 'القصيم'}];
  options2 = [{id: 1, name: 'منطقة الرياض'}, {id: 2, name: 'المنطقة الشرقية'}, {id: 3, name: 'المنطقة الجنوبية'}];
  options4 = [{id: 1, name: 'الملز'}, {id: 2, name: 'الغدير'}, {id: 3, name: 'العارض'}];
  radios = [{value: '1', display: 'تحديد علي الخريطة'}, {value: '2', display: 'إختيار يدوي'}];

  radioValue: string = '0';

  returnData: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.dialogRef.updateSize('80%', '98%');
    this.initForm();
  }

  initForm() {
    this.returnData = new FormGroup({
      senderName1: new FormControl('', Validators.required),
      senderName2: new FormControl('', Validators.required),
      senderName3: new FormControl('', Validators.required),
      senderName4: new FormControl('', Validators.required),
      senderName5: new FormControl('', Validators.required),
      senderName6: new FormControl('', Validators.required),
      senderName7: new FormControl('', Validators.required),
      senderName8: new FormControl('', [Validators.required, Validators.pattern('^\\d*$')]),
      senderName9: new FormControl('', Validators.required),
      senderName10: new FormControl(''),
      senderName11: new FormControl(''),
      senderName12: new FormControl(''),
      senderName13: new FormControl(''),
    });
  }

  submitForm(){
  }

  getFormGroup(contralName: string): FormControl {
    return this.returnData?.get(contralName) as FormControl;
  }

  changeRadio(){
    setTimeout(()=>{
      this.radioValue = this.returnData.get('senderName5')?.value;
      if(this.radioValue === '2'){
        this.returnData.get('senderName10')?.setValidators([Validators.required]);
        this.returnData.get('senderName10')?.updateValueAndValidity();
        this.returnData.get('senderName11')?.setValidators([Validators.required]);
        this.returnData.get('senderName11')?.updateValueAndValidity();
        this.returnData.get('senderName12')?.setValidators([Validators.required]);
        this.returnData.get('senderName12')?.updateValueAndValidity();
        this.returnData.get('senderName13')?.setValidators([Validators.required]);
        this.returnData.get('senderName13')?.updateValueAndValidity();
      }
        
      else{
        this.returnData.get('senderName10')?.clearValidators();
        this.returnData.get('senderName10')?.updateValueAndValidity();
        this.returnData.get('senderName11')?.clearValidators();
        this.returnData.get('senderName11')?.updateValueAndValidity();
        this.returnData.get('senderName12')?.clearValidators();
        this.returnData.get('senderName12')?.updateValueAndValidity();
        this.returnData.get('senderName13')?.clearValidators();
        this.returnData.get('senderName13')?.updateValueAndValidity();
      }
    }, 10);
  }

}


