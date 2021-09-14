import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest: HttpRequest<unknown> = request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getUserSession()?.token}`
      })
    });

    return next.handle(clonedRequest);
  }

}
