import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JsonPipe } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { InjectionToken } from '@angular/core';
import { GenericGridComponent } from './components/generic-grid/generic-grid.component';
import { HeaderInterceptor } from '../core/Interceptor/header.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    CustomDatePipe,
    GenericGridComponent,
    SharedButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    TranslateModule,
    SpinnerComponent,
    CustomDatePipe,
    FlexLayoutModule,
    FormsModule,

    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    SharedButtonComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
