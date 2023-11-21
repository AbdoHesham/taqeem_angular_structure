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
import { ConnectionLostComponent } from '../layout/connection-lost/connection-lost.component';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { InjectionToken } from '@angular/core';
import { GenericGridComponent } from './components/generic-grid/generic-grid.component';
import { HeaderInterceptor } from '../core/Interceptor/header.interceptor';

// import { CreateriaComponent } from './components/createria/createria.component';
export const COMPONENT_SOURCE = new InjectionToken<string>('ComponentSource');
@NgModule({
  declarations: [
    ConnectionLostComponent,
    SpinnerComponent,
    CustomDatePipe,
    GenericGridComponent,
    // CreateriaComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    JsonPipe,

    HttpClientModule,
    // ngx-translate and the loader module

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [


    ConnectionLostComponent,

    // CommonModule,

    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    TranslateModule,
    ConnectionLostComponent,
    SpinnerComponent,
    CustomDatePipe,
    // CreateriaComponent
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
