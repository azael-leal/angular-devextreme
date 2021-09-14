import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest: HttpRequest<unknown> = request.clone();
    clonedRequest.headers.set('no-loader', 'true');

    if (clonedRequest.headers.has('Content-Type')) {
       clonedRequest.headers.set('Content-Type', clonedRequest.headers.get('Content-Type') ?? 'application/json');
    }

    return next.handle(clonedRequest);
  }

}
