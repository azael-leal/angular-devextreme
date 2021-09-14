import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Services
import { MessageTypeEnum } from '@core/enums';
import { SnackbarService } from '@core/services';

@Injectable()
export class ResponseMessageHandlerInterceptor implements HttpInterceptor {

  constructor(
    private readonly snackbarService: SnackbarService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event?.body && event.body?.message) {
            this.showMessage(event.body?.message, event.body?.messageType);
          }
        }
      }),
    );
  }

  private showMessage(message: string, messageType: string) {
    switch (messageType) {
      case MessageTypeEnum.Success:
        this.snackbarService.openSuccess(message);
        break;
      case MessageTypeEnum.Warning:
        this.snackbarService.openWarning(message);
        break;
      default:
        this.snackbarService.openDefault(message);
        break;
    }
  }

}
