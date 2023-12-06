import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormsModule,
  NgControl,
  FormControl,
  ReactiveFormsModule,
  FormGroupDirective,
  NgForm,
  Validators,
  AbstractControl,
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

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})

export class InputFieldComponent implements OnInit {
  show = false;

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() type: string = 'text';
  @Input() isDisabled: boolean = false;
  // @Input() controlF: FormControl | any = new FormControl();

  @Input() controlF: FormControl | AbstractControl<any, any> | any = new FormControl();
  @Input() validators: ValidatorFn[] | null = null;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit() {}
}
