import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// Enums - Services
import { ErrorMessageEnum } from '@core/enums';
import { AuthService, SnackbarService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly authService: AuthService,
    private readonly snackbarService: SnackbarService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isUserLogged: boolean = this.authService.isUserLoggedIn();
    if (isUserLogged) {
      return true;
    } else {
      this.snackbarService.openError(ErrorMessageEnum.NeedToBeLoggedIn);
      this.authService.logout();
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

}
