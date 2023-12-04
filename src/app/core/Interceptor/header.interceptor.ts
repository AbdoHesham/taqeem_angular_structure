import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { AlertService } from '../../shared/services/alert.service';
@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  // constructor(private AlertService: AlertService) {}
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const reqCopy = request.clone();
    reqCopy.headers.set('AcceptLanguage', 'en');

    this.activeRequests++;

    // this.SpinnerService.isLoading.next(true);

    return next.handle(reqCopy).pipe(
      map((event) => {
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
          if (typeof error.error == 'string') {
            errorMsg = ` ${JSON.parse(error.error)?.error?.message}`;
          } else {
            errorMsg = ` ${error.error?.error?.message}`;
          }
        }
        return throwError(errorMsg);
      })
    );
  }
}
