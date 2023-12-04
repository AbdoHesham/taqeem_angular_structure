
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SharedButtonComponent } from '../../../shared/components/forms/shared-button/shared-button.component';
import { InputValidation } from '../../../shared/utils/InputValidation';
import { InputFieldComponent } from '../../../shared/components/forms/input-field/input-field.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePickerComponent } from '../../../shared/components/forms/date-picker/date-picker.component';
import { CodeInputModule } from 'angular-code-input';
import { map, take, timer } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-verfication-code',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    SharedButtonComponent,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    DatePickerComponent,
    CodeInputModule,
    TranslateModule,

  ],
  templateUrl: './verfication-code.component.html',
  styleUrl: './verfication-code.component.scss'
})
export class VerficationCodeComponent {
  form!: FormGroup;
  userCode: any = null;
  seconds: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
    const countdown$ = timer(0, 1000).pipe(
      take(60),
      map((secondsElapsed) => 300 - secondsElapsed)
    );

    countdown$.subscribe((secondsLeft) => {
      this.seconds = secondsLeft;
    });
  }

  initForm() {

  }

  login() {
    this.router.navigateByUrl('auth/login');

  }

  submit() {
    this.router.navigateByUrl('signup/recover-info');

  }
   // this called every time when user changed the code
   onCodeChanged(code: string) {
    this.userCode = null;
    console.log(code);
    
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    this.userCode = code;
  }
  
}
