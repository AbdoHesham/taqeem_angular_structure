import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

import {
  FormBuilder,
  FormsModule,
  NgControl,
  FormControl,
  ReactiveFormsModule,
  FormGroupDirective,
  NgForm,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { TranslateModule } from '@ngx-translate/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface radioValue {
  value: string;
  display: string;
}
@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    TranslateModule,
  ],
})
export class RadioButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() isDisabled: boolean = false;
  @Input() radios: radioValue[] = [];
  @Input() controlF: FormControl = new FormControl();
  @Output() radioChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() validators : []=[]
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    if (this.controlF instanceof FormControl && this.validators) {
      this.validators.forEach((validator: ValidatorFn | ValidatorFn[] | null) => {
        this.controlF?.setValidators(validator);
      });
    }
    this.controlF.patchValue(this.controlF.value);
  }
  @Input() backendError: string = '';

  getErrorMessages(): string[] | null {
    const errorMessages: string[] = [];
  
    if (this.controlF?.hasError('required')) {
      errorMessages.push('This field is required');
    }

    if (this.controlF?.hasError('pattern')) {
      errorMessages.push('Invalid pattern');
    }
      if (this.backendError) {
      errorMessages.push(this.backendError);
    }
  
    return errorMessages.length > 0 ? errorMessages : null;
  }

  handleClick(): void {
    this.radioChange.emit();
  }

  // getFloatLabelValue(): FloatLabelType {
  //   return this.floatLabelControl.value || 'auto';
  // }

}
