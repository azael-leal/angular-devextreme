import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Services - Interfaces
import { InternalApiService } from '@core/services';

@Injectable()
export class ResponseHandlerInterceptor implements HttpInterceptor {

  constructor(
    private readonly apiService: InternalApiService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return this.apiService.ownApiUrls(event.url) ? event.clone({body: event.body?.data}) : event;
        } else {
          return event;
        }
      }),
    );
  }

}
