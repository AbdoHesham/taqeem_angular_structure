import { Component, OnInit } from '@angular/core';
import { DataTableComponent } from '../../../../../shared/components/views/data-table/data-table.component';
import { TranslateModule } from '@ngx-translate/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import {MatButtonModule} from '@angular/material/button';
import { DialogReturnDataComponent } from './dialog-return-data/dialog-return-data.component';
import {MatDialog} from '@angular/material/dialog';
import { CancelButtonComponent } from '../../../../../shared/components/forms/cancel-button/cancel-button.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-info-departement',
  templateUrl: './info-departement.component.html',
  styleUrls: ['./info-departement.component.scss'],
  standalone: true,
  imports: [
    DataTableComponent,
    TranslateModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatButtonModule,
    CancelButtonComponent 
  ],
})
export class InfoDepartementComponent implements OnInit {
  dataSourceTable: PeriodicElement[] = [
    // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: { [index: string]: any } = {
    name: 'رقم صك الملكية',
    position: 'ملف الصك',
    weight: 'نوع الاصل',
    symbol: 'الاستخدام الحالي للأصل',
    name1: 'موقع الاصل',
    position1: 'رقم المخطط',
    weight1: 'رقم القطعة',
    symbo1: 'عمر الاصل',
    symbo2: 'المساحة',

  };
  isFilter: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogReturnDataComponent, { data: { name: 'Vishwas' } })
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
