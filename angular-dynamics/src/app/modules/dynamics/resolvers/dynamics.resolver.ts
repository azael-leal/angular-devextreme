import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

// Services - Models
import { Product } from './../models';
import { DynamicsService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class DynamicsResolver implements Resolve<Product[]> {

  constructor(
    private readonly dynamicsService: DynamicsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] {
    return this.dynamicsService.getProducts();
  }

}
