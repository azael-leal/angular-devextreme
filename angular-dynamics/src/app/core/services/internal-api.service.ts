import { HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

// Services - Interfaces - Environments
import { environment } from '@environments';
import { IApiResponse } from '@core/interfaces';
import { SnackbarService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class InternalApiService {

  constructor() { }

  ownApiUrls(requestedApiUrl: string | null): boolean { return requestedApiUrl?.includes(environment.apiUrl) ? true : false; }

}
