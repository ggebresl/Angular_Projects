import { Component, OnInit, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { tap ,finalize} from "rxjs/operators";
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class CustomHttpInterceptorComponent implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();
    /*return next.handle(req).do(res =>{
      console.log(res);
    },
    error=>Observable.throw('Failed request'),
    ()=>{
      console.log('Finished');
      console.log(" Form complete");
    }).finally(()=>{
      console.log("Finally block");
      this.spinner.hide();
    });*/
    
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
      
            this.sleep(10000);

            console.log(event);
          
          }
          
        },
        error => {
          if (error instanceof HttpErrorResponse) {
              console.error(error);
            }
          }
      ),
      finalize(()=>{
        console.log('Finalize is called');
        this.spinner.hide();})
    );
  }
  constructor(private spinner: NgxSpinnerService) { }
  sleep(seconds) 
{
  var e = new Date().getTime() + (seconds);
  while (new Date().getTime() <= e) {}
}
}
