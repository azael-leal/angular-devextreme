import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-MX';
registerLocaleData(localeEs);

// import { NgxSpinnerModule } from "ngx-spinner";
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { throwErrorIfModuleAlreadyLoaded } from '@core/validators';
import { ApiInterceptor, AuthInterceptor, HeadersInterceptor, LoaderInterceptor, HttpErrorHandlerInterceptor,
  ResponseHandlerInterceptor, ResponseMessageHandlerInterceptor } from '@core/interceptors';

@NgModule({
  imports: [
    HttpClientModule,
    // NgxSpinnerModule,
    // MatSnackBarModule
  ],
  exports: [
    // NgxSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseMessageHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptor, multi: true },
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    throwErrorIfModuleAlreadyLoaded(parentModule, 'CoreModule');
  }

}
