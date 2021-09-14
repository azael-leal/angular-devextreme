import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    private readonly router: Router
  ) { }

  goToMainRoute(): void {
    this.router.navigate([`app`]);
  }

  goToMainRouteFromResolver(): Observable<never> {
    this.goToMainRoute();
    return EMPTY;
  }

}
