import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedButtonComponent } from '../../../shared/components/forms/shared-button/shared-button.component';
import { SharedMapComponent } from '../../../shared/components/shared-map/shared-map.component';
import { ChangeDirService } from '../../../shared/services/change-dir.service';
import { InputValidation } from '../../../shared/utils/InputValidation';
import { TitleFormComponent } from '../../../shared/components/forms/title-form/title-form.component';
import { InputFieldComponent } from '../../../shared/components/forms/input-field/input-field.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { SelectFieldComponent } from '../../../shared/components/forms/select-field/select-field.component';
import { TextAreaComponent } from '../../../shared/components/forms/text-area/text-area.component';
import { RadioButtonComponent } from '../../../shared/components/forms/radio-button/radio-button.component';
import { CancelButtonComponent } from '../../../shared/components/forms/cancel-button/cancel-button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomAlertComponent } from '../../../shared/components/custom-alert/custom-alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    SharedButtonComponent,
    TranslateModule,
    SharedMapComponent,
    TitleFormComponent,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    SelectFieldComponent,
    TextAreaComponent,
    RadioButtonComponent,
    CancelButtonComponent,
    MatCheckboxModule,
    TranslateModule,
  ],
  providers: [ChangeDirService],
})
export class SigninComponent {
  animal: string = '';
  name: string = '';
  password: any;
  show = false;
  public CustomControler: any;
  form!: FormGroup;
  changePassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public changeLangService: ChangeDirService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        // Validators.pattern(InputValidation.complexPassword),
      ]),
    });
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  submit() {
    let body: any = {
      username: this.form.get('email')?.value.trim(),
      password: this.form.get('password')?.value.trim(),
    };
    this.router.navigateByUrl('signup/verfication-code/absher');
  }

  loginViaNfaz() {
    this.router.navigateByUrl('auth/login/nfaz');
  }

  ngOnDestroy() {}
  recoverData() {
    this.router.navigateByUrl('signup/recover-info');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CustomAlertComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
