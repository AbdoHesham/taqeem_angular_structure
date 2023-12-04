import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDirService } from './shared/services/change-dir.service';
import { IndividualsPortalComponent } from './features/individuals-portal/individuals-portal.component';
import { HorizontalFooterComponent } from './shared/components/layouts/horizontal-footer/horizontal-footer.component';
import { HorizontalHeaderComponent } from './shared/components/layouts/horizontal-header/horizontal-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,IndividualsPortalComponent,
    HorizontalFooterComponent  ,HorizontalHeaderComponent, TranslateModule,
  
  ],
  providers: [ChangeDirService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'structure-2';
  ngOnInit(){
    this.changeLangService.initLang()
  }

  constructor(public changeLangService: ChangeDirService) {
  }
}
