import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly httpLoader$ = new BehaviorSubject<boolean>(false);
  private readonly routeLoader$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  httpLoader = (): BehaviorSubject<boolean> => this.httpLoader$;

  routeLoader = (): BehaviorSubject<boolean> => this.httpLoader$;

  showHttpLoader = (): void => this.httpLoader$.next(true);

  hideHttpLoader = (): void => this.httpLoader$.next(false);

  showRouteLoader = (): void => this.routeLoader$.next(true);

  hideRouteLoader = (): void => this.routeLoader$.next(false);

}
