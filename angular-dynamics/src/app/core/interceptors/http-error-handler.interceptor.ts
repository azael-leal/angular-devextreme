import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

// Services
import { HttpStatusCodeEnum } from '@core/enums';
import { SnackbarService, AuthService } from '@core/services';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private readonly authService: AuthService,
    private readonly snackbarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if (error instanceof ErrorEvent) {
      // Client-side error
      console.error(`Client-side error: ${error}`);
    } else {
      // Backend error
      if (error.error?.message) {
        this.snackbarService.openError(error.error?.message);
      } else {
        this.snackbarService.openError(`Server-side error: ${error.status} ${error.message}`);
      }

      if (error.status === HttpStatusCodeEnum.Unauthorized) {
        this.authService.logout();
      }
    }
    return throwError(error);
  }

}
