import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Interafaces - Services
import { IDropdown, IDropdownCatalog } from '@core/interfaces';
import { noneDropdownOption } from '../constants/custom-dropdown';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getDropdowns(catalogs: string[]): Observable<IDropdownCatalog[]> {
    return this.http.post<IDropdownCatalog[]>('/DropDownList/DropDownList', catalogs);
  }

  filterByDependsId(dependsId: number, dropdown: IDropdown[]): IDropdown[] {
    return [...dropdown.filter(option => option.dependsId === dependsId || option.id === null)];
  }

  filterByListDependsId(listDependsId: number[], dropdown: IDropdown[]): IDropdown[] {
    let tempDropdown: IDropdown[] = [];
    listDependsId.forEach(dependsId =>
      tempDropdown = tempDropdown.concat(dropdown.filter(option =>
        option.listDependsId?.includes(dependsId))))
    return [noneDropdownOption, ...new Set(tempDropdown)];
  }

}
