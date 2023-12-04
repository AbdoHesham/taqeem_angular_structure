import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class InputFieldComponent implements OnInit {
  show = false;

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() isDisabled: boolean = false;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() control: FormControl | AbstractControl<any, any> | any = null;
  @Input() validators: ValidatorFn[] | null = null;
  constructor() {}
  
  ngOnInit() {
    console.log(this.type);
    
    if (this.control instanceof FormControl && this.validators) {
      this.validators.forEach((validator) => {
        this.control?.setValidators(validator);
      });
    }
    // this.control.patchValue(this.control.value);
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
