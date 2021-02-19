import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

declare var $:any;

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(evt => {
        if(evt instanceof HttpResponse)return of(evt.body);
      }),
      catchError((error:any) => {
        if(error instanceof HttpErrorResponse)
        {
          console.log(error);
          $('#errorToast.toast').addClass('visible');
          $('#errorToast.toast').toast('show');
        }
        return of(error);
      })
    );
  }
}
