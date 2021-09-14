import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces - Interfaces - Utils
import { IAutocomplete } from '@core/interfaces';
import { noLoadingSpinnerHttpOptions } from '@core/constants';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAutocomplete(catalogName: string, description: string): Observable<IAutocomplete[]> {
    const filter = { catalogo: catalogName, descripcion: description };
    return this.http.post<IAutocomplete[]>('/autocomplete', filter, noLoadingSpinnerHttpOptions);
  }

}
