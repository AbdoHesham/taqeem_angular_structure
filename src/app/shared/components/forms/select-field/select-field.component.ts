import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Option } from '../../../Models/option';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class SelectFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() isDisabled: boolean = false;
  @Output() selectChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() options: Option[] = [];

  @Input() control: FormControl | AbstractControl<any, any> | any = null;
  @Input() validators: ValidatorFn[] | null = null;
  constructor() {}

  ngOnInit() {
    if (this.control instanceof FormControl && this.validators) {
      this.validators.forEach((validator) => {
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
  
}
