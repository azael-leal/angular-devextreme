import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let apiUrl: string = request.url;

    if (request.url.startsWith('/')) {
      apiUrl = `${environment.apiUrl}${request.url}`;
    }

    const clonedRequest: HttpRequest<unknown> = request.clone({url: apiUrl});

    return next.handle(clonedRequest);
  }

}
