import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaces - Environments
import { IApi } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService <T> implements IApi {

  constructor(
    protected readonly http: HttpClient,
    @Inject(String) private readonly apiUrl: string
  ) { }

  search = (filter: any): Observable<T> => this.http.post<T>(`/${this.apiUrl}}`, filter);

  getList(page: number, perPage: number): Observable<T[]> {
    let params = new HttpParams()
			.set('page', page.toString())
			.set('per_page', perPage.toString());

    return this.http.get<T[]>(`${this.apiUrl}?${params.toString()}`);
  }

  get = (id: string | number): Observable<T> => this.http.get<T>(`${this.apiUrl}/${id}`);

  add = (resource: T): Observable<any> => this.http.post(`${this.apiUrl}`, resource);

  update = (resource: T) => this.http.put(`${this.apiUrl}`,resource);

  delete = (id: string | number): Observable<any> => this.http.delete(`${this.apiUrl}/${id}`);

}
