import { SessionStateService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDirService {

  constructor(    private sessionState: SessionStateService,
    ) { }
  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }
  dir() {
    let dir = localStorage.getItem('currentLang');
    return dir;
  }
}
