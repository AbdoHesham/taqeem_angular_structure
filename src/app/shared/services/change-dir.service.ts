import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeDirService {
  constructor() {}
  onChangeLang(cultureName: string) {
    // this.sessionState.setLanguage(cultureName);
  }
  dir() {
    // if (typeof localStorage !== 'undefined') {
    //   // localStorage is available, use it
    //   return localStorage.getItem('currentLang') || 'en';
    // }
    return 'en';
  }
}
