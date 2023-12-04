import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidatorFn} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
  ],
})
export class RadioButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() isDisabled: boolean = false;
  @Output() radioChange: EventEmitter<string> = new EventEmitter<string>();

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  @Input() control: FormControl | AbstractControl<any, any> | any = null;
  @Input() validators: ValidatorFn[] | null = null;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.control instanceof FormControl && this.validators) {
      this.validators.forEach(validator => {
        this.control?.setValidators(validator);
      });
    }
    this.control.patchValue(this.control.value);
  }
  @Input() backendError: string = '';

  getErrorMessages(): string[] | null {
    const errorMessages: string[] = [];
  
    if (this.control?.hasError('required')) {
      errorMessages.push('This field is required');
    }
  
    // Add more error messages based on your validation requirements
    // For example, checking for other errors:
    if (this.control?.hasError('pattern')) {
      errorMessages.push('Invalid pattern');
    }
  
    // Add backend error if it exists
    if (this.backendError) {
      errorMessages.push(this.backendError);
    }
  
    return errorMessages.length > 0 ? errorMessages : null;
  }
  
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
