import { Component, OnInit } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.css'],
  standalone: true,
  imports: [MatCardModule, FlexLayoutModule, FlexLayoutServerModule]
})
export class TitleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
