import { Component, OnInit, Input } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.scss'],
  standalone: true,
  imports: [MatCardModule, FlexLayoutModule, FlexLayoutServerModule]
})
export class TitleFormComponent implements OnInit {

  @Input() title: string = '';
  @Input() srcLink: string = '';

  constructor() { }

  ngOnInit() {
  }

}
