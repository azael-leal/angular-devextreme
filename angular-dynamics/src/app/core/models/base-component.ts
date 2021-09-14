import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BaseComponent implements OnDestroy {

  readonly unsubscribe$ = new Subject<void>();

  constructor( ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

}
