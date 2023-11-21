import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    // public messageService: MessageService,
    // private localizationService: LocalizationService
  ) {}
  // showMessage(severity = 'success', content,Altseverity?) {
  //   const summary = this.localizationService.instant('::' + severity);

  //   this.messageService.add({ severity:Altseverity!=null?Altseverity: severity, summary: summary, detail: content, life: 7000 });
  // }
}
