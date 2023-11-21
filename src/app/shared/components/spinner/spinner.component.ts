import { Component, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
// import { Message } from 'primeng/api';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isLoad: boolean = false;
  constructor(public SpinnerService: SpinnerService, private cd: ChangeDetectorRef) {
    // this.isLoad = this.SpinnerService.isLoad;
  }

  ngOnInit(){
    console.log('init');

   
    // this.SpinnerService.isLoading.subscribe(this.showSpinner.bind(this));
    this.SpinnerService.isLoading.subscribe((state: boolean) => {
      this.isLoad = state;
      this.cd.detectChanges();
    });
  }
  showSpinner(state: boolean): void {
    if (state == true) {
      this.isLoad = true;
      this.cd.detectChanges();

    } else {
      this.isLoad = false;
      this.cd.detectChanges();
    }
  }

}
