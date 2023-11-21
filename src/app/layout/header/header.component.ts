/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChangeDirService } from '../../shared/services/change-dir.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  formGroup!: FormGroup;

  stateOptions: any[] = [
    { label: 'ar', value: 'ar', flag: '../../../assets/images/flags/saudi-arabia-flag-icon.svg' },
    { label: 'en', value: 'en', flag: '../../../assets/images/flags/united.svg' },
  ];
  currentLang: string = 'en';


  constructor(public ChangeDirService: ChangeDirService,
    ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.formGroup = new FormGroup({
      currentLang: new FormControl('en'),
    });
    this.initLang();
  }
  selectCurrentLang(e:any) {
    console.log(e);
  }
  initLang() {
    localStorage.getItem('currentLang')
      ? localStorage.getItem('currentLang')
      : localStorage.setItem('currentLang', 'en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.formGroup.controls['currentLang'].patchValue(this.currentLang);
  }

  navigateToLogin() {
    // this.authService.navigateToLogin();
  }
  logout() {
    // this.authService.logout().subscribe(
      // res=>{  this.navigateToLogin();
      // }
    // );
  }
  changeCurrentLang(lang: string) {
    this.ChangeDirService.onChangeLang(lang)
    this.formGroup.controls['currentLang'].patchValue(lang);
    const storedLang = localStorage.getItem('currentLang');
    if (storedLang == lang) {
      return;
    } else {
      localStorage.setItem('currentLang', lang);
      location.reload();
    }
  }


  onChangeLang(cultureName: string) {
    // this.sessionState.setLanguage(cultureName);
  }
}
