import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDirService {

  constructor(   
    ) { }
  onChangeLang(cultureName: string) {
    // this.sessionState.setLanguage(cultureName);
  }
  dir() {
    let dir = localStorage.getItem('currentLang');
    return dir;
  }
}
