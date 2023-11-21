import { Injectable } from '@angular/core';
import { PageType, SchedulePageType } from '../models/page-enums';
import { Router } from '@angular/router';
import { ProviderTabsComponent } from 'src/app/provider/Manage/provider-tabs/provider-tabs.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DoctorTabsComponent } from 'src/app/doctor/Manage/doctor-tabs/doctor-tabs.component';
import { BranchManagementComponent } from 'src/app/branch/Manage/branch-management/branch-management.component';
import { LocalizationService } from '@abp/ng.core';
import { ScheduleManageComponent } from 'src/app/schedule/Manage/schedule-manage/schedule-manage.component';
import { TabsComponent } from 'src/app/Appointment/Manage/tabs/tabs.component';
import { CanNotRescudleComponent } from 'src/app/Appointment/Manage/can-not-rescudle/can-not-rescudle.component';
import { ServiceFeesManageComponent } from 'src/app/service-fees/Manage/service-fees-manage/service-fees-manage.component';

@Injectable({
  providedIn: 'root',
})
export class FormHelperService {
  constructor(
    private router: Router,
    public dialogService: DialogService,
    private localizationService: LocalizationService
  ) {}

  getFirstChars(Name) {
    let firstTwoLetters = '';
    const spaceIndex = Name.indexOf(' ');
    if (spaceIndex === -1) {
      firstTwoLetters = Name.substring(0, 2);
    } else {
      firstTwoLetters = Name.substring(0, 1) + Name.substring(spaceIndex + 1, spaceIndex + 2);
    }
    return firstTwoLetters;
  }
  OpenAddProvider(providerID?, BranchID?, DoctorID?): DynamicDialogRef {
    if (providerID == null) {
      return this.Providertabs(null, PageType.add, false);
    } else if (providerID != null && BranchID?.length == 0) {
      return this.OpenBranch(providerID, null, PageType.add);
    } else if (BranchID != null) {
      return this.Doctortabs(DoctorID, PageType.add, providerID, BranchID);
    }
  }
  OpenBranch(
    Providerid,
    branchId,
    type: PageType = PageType.add,
    addBranch?: boolean
  ): DynamicDialogRef {
    let headerTitle = this.localizationService.instant('::Add Branch');
    if (type == PageType.edit) headerTitle = this.localizationService.instant('::Edit Branch');
    else if (type == PageType.view) headerTitle = this.localizationService.instant('::View Branch');
    let ref: DynamicDialogRef = this.dialogService.open(BranchManagementComponent, {
      header: headerTitle,
      data: { providerId: Providerid, branchId: null, PageType: 'add' },
    });

    return ref;
  }
  Providertabs(id?, type: PageType = PageType.add, addBranch?: boolean): DynamicDialogRef {
    let ref = this.dialogService.open(ProviderTabsComponent, {
      header: '',
      maskStyleClass: 'provider-dialog',
      data: {
        providerId: id,
        PageType: type,
        addBranch: addBranch,
      },
    });
    return ref;
  }
  Doctortabs(id?, type: PageType = PageType.add, providerID?, BranchID?): DynamicDialogRef {
    let ref: DynamicDialogRef = this.dialogService.open(DoctorTabsComponent, {
      header: '',
      maskStyleClass: 'doctor-dialog',

      data: {
        DoctorId: id,
        PageType: type,
        providerID: providerID,
        BranchID: BranchID,
      },
    });

    return ref;
  }
  AddServiceFee(dialogRef, providerID?, BranchID?, DoctorID?) {
    if (dialogRef != null) {
      dialogRef.close();
    }
    this.router.navigate(['/ServiceFees'], {
      queryParams: {
        ProviderID: providerID,
        type: PageType.add.toString(),
        BranchID: [BranchID],
        DoctorID: DoctorID,
      },
    });
  }
  OpenServiceFee( //( providerID?, BranchID?, DoctorID?) {
    id?,
    ProviderId?,
    BranchId?,
    DoctorId?
    ,    type: PageType = PageType.add,

  ): DynamicDialogRef {
    let header = '';
    header =
      type == PageType.add ? this.localizationService.instant('::Add Service Fee popup title') : ``;
    let ref = this.dialogService.open(ServiceFeesManageComponent, {
      maskStyleClass: 'fees-dialog',
      header: header,

      data: {
        Id: id,
        PageType: type,
        ProviderId: ProviderId,
        BranchId: BranchId,
        DoctorId: DoctorId,
      },
    });
    return ref;
  }

  SchedulePopup(
    id?,
    providerID?,
    BranchID?,
    DoctorID?,
    type: SchedulePageType = SchedulePageType.add
  ): DynamicDialogRef {
    let ref = this.dialogService.open(ScheduleManageComponent, {
      maskStyleClass: 'Schedule-dialog',
      header: this.localizationService.instant('::Add New Shift Popup title'),

      data: {
        ScheduleId: id,
        SchedulePageType: type,

        providerID: providerID,
        BranchID: BranchID,
        DoctorID: DoctorID,
      },
    });
    return ref;
    //event when cancel
    // this.ref.onClose.subscribe(data => {
    //   //refresh after save
    //   //load grid
    //   //toaster
    //   if (data == 'add')
    //     this.showMessage('success', this.localizationService.instant('::AddSuccessAlert'));
    //   else if (data == 'edit')
    //     this.showMessage('success', this.localizationService.instant('::EditedSuccessAlert'));
    //   else if (data == 'change')
    //     this.showMessage('success', this.localizationService.instant('::ChangedSuccessAlert'));
    //   else if (data == 'stop')
    //     this.showMessage('success', this.localizationService.instant('::StopedSuccessAlert'));
    //   else if (data == 'hold')
    //     this.showMessage('success', this.localizationService.instant('::HoldSuccessAlert'));
    //   this.LoadList();
    // });
  }

  createAppointment(id?, type: PageType = PageType.add, providerID?, BranchID?, DoctorID?) {
    localStorage.removeItem('appoientmentForm');

    let ref;
    ref = this.dialogService.open(TabsComponent, {
      maskStyleClass: 'Appointment-dialog',
      header:
        type == PageType.add
          ? this.localizationService.instant('::Create Appointment')
          : type == PageType.edit
          ? this.localizationService.instant('::Reschedule Appointment')
          : '',
      data: {
        AppointmentId: type == PageType.add ? (id = null) : id,
        PageType: type,
        providerID: providerID,
        BranchID: BranchID,
        DoctorID: DoctorID,
      },
      width: '80%',
      height: '50vw',
      closeOnEscape: true,
      modal: true,
    });
    return ref;
    //event when cancel
    // this.ref.onClose.subscribe(data => {
    //   //refresh after save
    //   //load grid
    //   //toaster
    //   if (data == 'add') {
    //     this.getList();
    //     this.AlertService.showMessage('success', this.localizationService.instant('::Appointment Created successfully') );
    //   } else if (data == 'edit') {
    //     this.getList();
    //     this.AlertService.showMessage('success',this.localizationService.instant('::Appointment Rescheduled successfully')  );
    //   }
    // });
  }

  removeQueryParam(location) {
    location.replaceState(location.path().split('?')[0]);
  }
GetHeadTime(dateTimeString:Date): Date{
//  const dateTimeString = '11/19/2023 11:49 AM';
const dateTime = new Date(dateTimeString);
// Increment the hour component by 1
dateTime.setHours(dateTime.getHours() + 1);
// Set minutes and seconds to zero
dateTime.setMinutes(0);
dateTime.setSeconds(0);
console.log(dateTime); // Output: Mon Nov 19 2023 12:00:00
return dateTime
}
}
export function getDateWithoutSeconds(date) {
  const date1WithoutSeconds = new Date(date);
  date1WithoutSeconds.setMinutes(0);
  date1WithoutSeconds.setHours(0);
  date1WithoutSeconds.setSeconds(0);
  date1WithoutSeconds.setMilliseconds(0);
  return date1WithoutSeconds;
}
