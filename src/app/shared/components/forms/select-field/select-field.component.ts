import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

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
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
// import { Option } from '../../../Models/option';

 interface Option {
  id: number;
  name: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class SelectFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hint: string = '';
  @Input() isDisabled: boolean = false;
  @Input() options: Option[] | any = [];
  @Input() controlF: FormControl | AbstractControl<any, any> | any = new FormControl();
  @Output() selectChange: EventEmitter<string> = new EventEmitter<string>();
  // @Input() options: Option[] = [];

  matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit() {}
}
