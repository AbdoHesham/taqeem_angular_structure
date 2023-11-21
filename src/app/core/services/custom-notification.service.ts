import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomNotificationService {
  constructor(
    // private dialogService: DialogService,
    // private confirmationService: ConfirmationService,
    // private dialogRef: DynamicDialogRef
  ) {
    
    this.activeItem.subscribe(v=>{
      console.log(v);
      
    })
  }

  public activeItem = new BehaviorSubject<any>(null);
  // public activeItem: any;
  // cancel() {
  //   this.confirmationService.confirm({
  //     message: this.localizationService.instant('::Are you sure you want to cancel data submission?') ,
  //     header: 'Cancel',
  //     icon: 'pi pi-info-circle',
  //     accept: () => {
  //       // Close popup
  //       this.dialogService.dialogComponentRefMap.clear();
  //     },
  //     reject: (type: ConfirmEventType) => {
  //       switch (type) {
  //         case ConfirmEventType.REJECT:
  //           console.log("don't REJECT");
  //           this.cancel();
  //           break;
  //         case ConfirmEventType.CANCEL:
  //           console.log("don't cancel");
  //           this.cancel();
  //           break;
  //       }
  //     },
  //   });
  // }
}