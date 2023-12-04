import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidatorFn} from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,FormsModule,ReactiveFormsModule,],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() isDisabled: boolean = false;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() control: FormControl | AbstractControl<any, any> | any = null;
  @Input() validators: ValidatorFn[] | null = null;
  ngOnInit() {
    if (this.control instanceof FormControl && this.validators) {
      this.validators.forEach(validator => {
        this.control?.setValidators(validator);
      });
    }
    this.control.patchValue(this.control.value);

  }
  getErrorMessage(): string | null {
    if (this.control?.hasError('required')) {
      return 'This field is required';
    }
    // Add more error messages based on your validation requirements
    return null;
  }
}
