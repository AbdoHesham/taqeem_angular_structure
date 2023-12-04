import { Component, OnInit } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
@Component({
  selector: 'app-horizontal-footer',
  templateUrl: './horizontal-footer.component.html',
  styleUrls: ['./horizontal-footer.component.css'],
  standalone: true,
  imports: [FlexLayoutModule, FlexLayoutServerModule],
})
export class HorizontalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
