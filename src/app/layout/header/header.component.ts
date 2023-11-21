/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AuthService, ConfigStateService, CurrentUserDto, LanguageInfo, NAVIGATE_TO_MANAGE_PROFILE, SessionStateService } from '@abp/ng.core';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ChangeDirService } from 'src/app/shared/services/change-dir.service';

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
  currentLang: string;
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  selectedTenant$ = this.sessionState.getTenant$();

  constructor(public ChangeDirService: ChangeDirService,
    private sessionState: SessionStateService,
    private configState: ConfigStateService,
    private authService: AuthService,

    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public navigateToManageProfile,

    ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.formGroup = new FormGroup({
      currentLang: new FormControl('en'),
    });
    this.initLang();
  }
  selectCurrentLang(e) {
    console.log(e);
  }
  initLang() {
    localStorage.getItem('currentLang')
      ? localStorage.getItem('currentLang')
      : localStorage.setItem('currentLang', 'en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.formGroup.controls.currentLang.patchValue(this.currentLang);
  }

  navigateToLogin() {
    this.authService.navigateToLogin();
  }
  logout() {
    this.authService.logout().subscribe(
      // res=>{  this.navigateToLogin();
      // }
    );
  }
  changeCurrentLang(lang: string) {
    this.ChangeDirService.onChangeLang(lang)
    this.formGroup.controls.currentLang.patchValue(lang);
    const storedLang = localStorage.getItem('currentLang');
    if (storedLang == lang) {
      return;
    } else {
      localStorage.setItem('currentLang', lang);
      location.reload();
    }
  }
  languages$: Observable<LanguageInfo[]> = this.configState.getDeep$('localization.languages');

  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          languages.find(lang => lang.cultureName === this.selectedLangCulture).displayName
      )
    );
  }
  get dropdownLanguages$(): Observable<LanguageInfo[]> {
    return this.languages$.pipe(
      map(languages => languages.filter(lang => lang.cultureName !== this.selectedLangCulture))
    );
  }
  get selectedLangCulture(): string {
    return this.sessionState.getLanguage();
  }

  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }
}
