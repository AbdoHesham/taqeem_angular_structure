import { Component, OnInit } from '@angular/core';
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
import { DialogAddManualComponent } from '../dialog-add-manual/dialog-add-manual.component';

@Component({
  selector: 'app-dialog-return-data',
  templateUrl: './dialog-return-data.component.html',
  styleUrls: ['./dialog-return-data.component.scss'],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    TranslateModule,
    SharedButtonComponent,
    CancelButtonComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    InputFieldComponent
  ],
})
export class DialogReturnDataComponent implements OnInit {

  returnData: FormGroup = new FormGroup({});

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.dialogRef.updateSize('32%', '41%');
    this.initForm();
  }

  initForm() {
    this.returnData = new FormGroup({
      senderName1: new FormControl('', Validators.required),
    });
  }

  submitForm(){
    console.log(this.returnData);
  }

  getFormGroup(contralName: string): FormControl {
    return this.returnData?.get(contralName) as FormControl;
  }

  onNoClick(): void {
    let dialogRef = this.dialog.open(DialogAddManualComponent, { data: { name: 'Vishwas' } })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
