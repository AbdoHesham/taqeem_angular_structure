import { Component, OnInit } from '@angular/core';
import { HorizontalHeaderComponent } from '../../shared/components/layouts/horizontal-header/horizontal-header.component';
import { HorizontalFooterComponent } from '../../shared/components/layouts/horizontal-footer/horizontal-footer.component';
import { TitleFormComponent } from '../../shared/components/forms/title-form/title-form.component';
import { InputFieldComponent } from '../../shared/components/forms/input-field/input-field.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { SelectFieldComponent } from '../../shared/components/forms/select-field/select-field.component';
import { SharedButtonComponent } from '../../shared/components/forms/shared-button/shared-button.component';
import { TextAreaComponent } from '../../shared/components/forms/text-area/text-area.component';
import { RadioButtonComponent } from '../../shared/components/forms/radio-button/radio-button.component';
import { CancelButtonComponent } from '../../shared/components/forms/cancel-button/cancel-button.component';

@Component({
  selector: 'app-individuals-portal',
  templateUrl: './individuals-portal.component.html',
  styleUrls: ['./individuals-portal.component.scss'],
  standalone: true,
  imports: [
    HorizontalHeaderComponent,
    HorizontalFooterComponent,
    TitleFormComponent,
    InputFieldComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    SelectFieldComponent,
    SharedButtonComponent,
    TextAreaComponent,
    RadioButtonComponent,
    CancelButtonComponent,
    
  ],
})
export class IndividualsPortalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
