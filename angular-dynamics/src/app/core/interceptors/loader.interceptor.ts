import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { LoaderService } from '@core/services';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedRequest: HttpRequest<unknown> = request.clone();

    if (!clonedRequest.headers.has('no-loader')) {
      this.loaderService.showHttpLoader();
      return next.handle(request).pipe(finalize(() => this.loaderService.hideHttpLoader()));
    } else {
      return next.handle(request);
    }
  }

}
