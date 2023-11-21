import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, map, finalize, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AlertService } from '../../shared/services/alert.service';
// import { RefreshTokenService } from '@abp/abpHttpInterceptor';
// import { TokenAuthServiceProxy, RefreshTokenResult } from '@shared/service-proxies/service-proxies';
@Injectable(
  {
    providedIn:'root'
  }
)
// providers: [ DynamicDialogRef],
export class HeaderInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  ctr = 0;
  // dialogRef: DynamicDialogRef;
  constructor(
    private AlertService: AlertService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqCopy = request.clone();
    reqCopy.headers.set('AcceptLanguage', 'en');

    this.activeRequests++;

    // this.SpinnerService.isLoading.next(true);

    return next.handle(reqCopy).pipe(
      map(event => {
        return event;
      }),
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          // this.SpinnerService.isLoading.next(false);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        let errors;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          debugger;
          if (typeof error.error == 'string') {
            errorMsg = ` ${JSON.parse(error.error)?.error?.message}`;
          } else errorMsg = ` ${error.error?.error?.message}`;
          if (error?.error?.error?.validationErrors?.length > 0) {
            errorMsg = ``;
            errors = error?.error?.error?.validationErrors?.map((error:any) => error.message).join('\n');
            errorMsg += ` \n${errors}`;
          }
          // if (error.error?.error?.code == 900) {
            
          //     this.AlertService.showMessage(
          //       errorMsg,
          //       error.error?.error?.details,
          //       'error'
          //     );
            
          // } 
          // else {
            // this.AlertService.showMessage('error', errorMsg);
          //}
        }
        return throwError(errorMsg);
      })
      // catchError((error: HttpErrorResponse) => {
      //   let errorMsg = '';

      //   let errors;
      //   if (error.error instanceof ErrorEvent) {
      //     errorMsg = `Error: ${error.error.message}`;
      //   } else {
      //     errorMsg = ` ${error.error?.error?.message}`;
      //     if (error?.error?.error?.validationErrors?.length > 0) {
      //       errorMsg = '';
      //       errors = error.error.error.validationErrors
      //         .map((error: any) => error.message)
      //         .join('\n');
      //       errorMsg += ` \n${errors}`;
      //     }
      //     this.AlertService.showMessage('error', errorMsg);
      //   }
      //   return throwError(errorMsg);
      // })
    );
  
  }
}
