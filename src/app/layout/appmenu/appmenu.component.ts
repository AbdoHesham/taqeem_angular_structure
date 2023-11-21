import { AuthService, ConfigStateService, CurrentUserDto, SessionStateService } from '@abp/ng.core';
import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { BlockUI } from 'primeng/blockui';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { PageAction } from 'src/app/core/models/page-enums';
import { BranchGridComponent } from 'src/app/provider/Lists/branch-grid/branch-grid.component';
import { ProviderManagementComponent } from 'src/app/provider/Manage/provider-management/provider-management.component';
import {
  CustomTabsComponent,
  Tab1Component,
  Tab2Component,
  Tab3Component,
} from 'src/app/shared/components/custom-tabs/custom-tabs.component';
import { ProviderTabs, customTabMenuItem } from 'src/app/shared/model/customTabMenuItem';
import { BlockingService } from 'src/app/shared/services/blocking.service';
/*import { CustomTabsComponent } from 'src/app/shared/components/custom-tabs/custom-tabs.component';*/
import { BranchManagementComponent } from '../../branch/Manage/branch-management/branch-management.component';
declare var $: any;

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss'],
  providers: [DialogService, MessageService],
})
export class AppmenuComponent implements OnInit {
  //events related to next and previous in tab control

  //#region Dynamic tab dialog events

  ref: DynamicDialogRef;
  onNext: EventEmitter<{ prevIndex: number; current: number }> = new EventEmitter<{
    prevIndex: number;
    current: number;
  }>();
  onPrev: EventEmitter<{ prevIndex: number; current: number }> = new EventEmitter<{
    prevIndex: number;
    current: number;
    activeItem: customTabMenuItem;
  }>();
  ClearBtn: EventEmitter<{ current: number }> = new EventEmitter<{ current: number }>();
  //#endregion
  constructor(
    private configState: ConfigStateService,
    private authService: AuthService,
    private sessionState: SessionStateService,
    public dialogService: DialogService,
    private resolver: ComponentFactoryResolver  ) {}

  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  selectedTenant$ = this.sessionState.getTenant$();

  show() {
    this.ref = this.dialogService.open(ProviderManagementComponent, { header: '',
    maskStyleClass: 'provider-dialog'
  });
  }
  
  
  //#region Dynamic tab dialod
  items: customTabMenuItem[] = [
    {
      tabindex: '0',
      label: 'Provider Details',
      icon: 'pi pi-fw pi-home',
      content: ProviderManagementComponent,
    },
    {
      tabindex: '1',
      label: 'Branch(s) Basics',
      icon: 'pi pi-fw pi-calendar',
      content: BranchGridComponent,
      disabled: true,
    },
    {
      tabindex: '2',
      label: 'Assign Doctor',
      icon: 'pi pi-fw pi-pencil',
      content: Tab3Component,
      disabled: true,
    },
    {
      tabindex: '3',
      label: 'Schedule & Service',
      icon: 'pi pi-fw pi-file',
      content: Tab1Component,
      disabled: true,
    },
    {
      tabindex: '4',
      label: 'Payment & Insurance',
      icon: 'pi pi-fw pi-file',
      content: Tab2Component,
      disabled: true,
    },
    {
      tabindex: '5',
      label: 'Assign Assistant (optional)',
      icon: 'pi pi-fw pi-file',
      content: Tab3Component,
      disabled: true,
    },
    {
      tabindex: '6',
      label: 'Assign Assistant (optional)',
      icon: 'pi pi-fw pi-file',
      content: Tab3Component,
      disabled: true,
    },
  ];
  //load tabs dialog with dynamic items , component
  Providertabs(id?,tabIndex?) {
if(id!=null) this.items[tabIndex].id=id;

    this.ref = this.dialogService.open(CustomTabsComponent, {
      header: '',
      maskStyleClass: 'provider-dialog',

      data: {
        items: this.items,
        onNext: this.onNext,
        onPrev: this.onPrev,
        ClearBtn: this.ClearBtn,
       saveAndCloseLabel:'Save As Pending'
      },
    });

    //event after next click
    this.onNext.subscribe(data => {
      console.log(`onNext`);

      console.log(data);
      this.ExcuteSubmit(data.prevIndex,data.current);
    });
    //event after prev click
    this.onPrev.subscribe(data => {
      console.log(`onPrev`);
      //{ prevIndex: prevIndex, current: CurrIndex }
      console.log(data);
      this.LoadTabData(data.current);
    });
    //event when cancel
    this.ClearBtn.subscribe(data => {
      this.ClearForm(data.current);
    });
    //event when cancel
    this.ref.onClose.subscribe(data => {
      console.log('Dialog closed with data:', data);
    });
  }
  PageActionlst = PageAction;
  blockedDocument: boolean = false;

  ClearForm(tabIndex) {
    switch (tabIndex) {
      //clear data ?????
      case ProviderTabs['Provider Details']:
        (this.items[tabIndex].componentRef as ProviderManagementComponent).PageAction(
          this.PageActionlst.clear
          //confirmation dialog
        );
        break;
      case ProviderTabs['Branch(s) Basics']:
        console.log('tab 2 sumbit');
        break;

      default:
        break;
    }
  }
  ExcuteSubmit(tabIndex,NextIndex?) {
    this.blockedDocument = true;

    switch (tabIndex) {
      case ProviderTabs['Provider Details']:
        if (this.items[tabIndex].id == undefined) {
          (this.items[tabIndex].componentRef as ProviderManagementComponent).PageAction(
            this.PageActionlst.add
          );
        } else {
          (this.items[tabIndex].componentRef as ProviderManagementComponent).PageAction(
            this.PageActionlst.edit
          );
        }
        this.items[tabIndex].componentRef.onSubmitForm.subscribe(id => {
          this.items[tabIndex].id = id;
          this.blockedDocument = false;
         if(NextIndex!=null) this.LoadTabData(NextIndex) ;
        });
        break;

      case ProviderTabs['Branch(s) Basics']:
        console.log('tab 2 sumbit');
        break;

      default:
        break;
    }
  }
//load tabs data
  LoadTabData(tabIndex) {
    this.blockedDocument = true;
    let providercomp;
    switch (tabIndex) {
      case ProviderTabs['Provider Details']:
        providercomp = this.items[tabIndex].componentRef as ProviderManagementComponent;
        providercomp.ProviderId = this.items[tabIndex].id;
        providercomp.PageType = 'edit';
        providercomp.PageAction(PageAction.getData);
        //after page load
        this.blockedDocument = false;
        break;

      case ProviderTabs['Branch(s) Basics']:
        let BranchGrid = this.items[tabIndex].componentRef as BranchGridComponent;
        let providerIndex = ProviderTabs['Provider Details'];
        providercomp = this.items[providerIndex].componentRef as ProviderManagementComponent;
        BranchGrid.ProviderId = providercomp.ProviderId;
        this.items[providerIndex].parentId = providercomp.ProviderId;
        BranchGrid.LoadBranches();
        this.items[tabIndex].componentRef.AfterLoaded.subscribe(() => {
        });
        console.log('tab 2 sumbit');
        break;
    }
  }
  showBranch() {
    this.ref = this.dialogService.open(BranchManagementComponent, { header: 'Add Branch' });
  }
  

  //#endregion
//#region Grid Events
  ngOnInit(): void {
    $('[data-widget="treeview"]').Treeview('init'); // inits the collapsibel menus
  }
}
