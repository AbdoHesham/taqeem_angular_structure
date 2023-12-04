import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { langBox } from '../constants/localStorageKeys';

@Injectable()
export class ChangeDirService {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  onChangeLang(cultureName: string) {
    //  this.sessionState.setLanguage(cultureName);
  }

  arLang = 'ar';
  arDir = 'rtl';

  enLang = 'en';
  enDir = 'ltr';

  currentLang?: string ='';
  // changeLang() {
  //   this.currentLang = localStorage.getItem(langBox) ?? '';
  //   this.currentLang = this.translate.currentLang;

  //   if (this.currentLang == this.arLang) {
  //     localStorage.setItem(langBox, this.enLang);
  //     this.translate.use(this.enLang);
  //     this.document.documentElement.setAttribute('dir', this.enDir);
  //     this.currentLang = this.enLang;
  //     window.location.reload()
  //   } else {
  //     localStorage.setItem(langBox, this.arLang);
  //     this.translate.use(this.arLang);
  //     this.document.documentElement.setAttribute('dir', this.arDir);
  //     this.currentLang = this.arLang;
  //     window.location.reload()
  //   }
  //   console.log(this.currentLang);
    
  // }

  // setDefultLang() {
  //   this.currentLang = localStorage.getItem(langBox) ?? '';
  //   if (this.currentLang == '' || this.currentLang == this.arLang) {
  //     this.translate.setDefaultLang('ar');
  //     this.translate.use('ar');

  //     this.currentLang = this.arLang;
  //   } else {
  //     this.translate.use(this.enLang);
  //     this.document.documentElement.setAttribute('dir', this.enDir);
  //     this.currentLang = this.enLang;
  //   }
  // }
  

  initLang() {
    localStorage.getItem('currentLang')
      ? localStorage.getItem('currentLang')
      : localStorage.setItem('currentLang', 'en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }

  changeLang(lang: string) {
    const storedLang = localStorage.getItem('currentLang');
    if (storedLang == lang) {
      return;
    } else {
      this.translate.use(lang);
      localStorage.setItem('currentLang', lang);
      location.reload();
    }
  }
  dir() {
    let dir = localStorage.getItem('currentLang');
    return dir;
  }

}
