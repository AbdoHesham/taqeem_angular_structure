import { TranslateModule } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

import { ChangeDirService } from '../../../services/change-dir.service';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrls: ['./horizontal-header.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    TranslateModule,
  ],
  providers: [ChangeDirService],
})
export class HorizontalHeaderComponent implements OnInit {

  constructor(public changeLangService: ChangeDirService) {}

  ngOnInit() {}

  changeLang() {
    this.changeLangService.changeLang();
  }
}
