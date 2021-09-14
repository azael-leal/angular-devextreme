import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

// Services - Models - Interfaces
import { UserConfig } from '@core/models';
import { ILogin, IMenu } from '@core/interfaces';
import { StorageService, CryptoService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userLocalStorageKey: string = 'u_cf';
  private readonly userCryptoKey: string = 'mkyu$rCptKy';
  private readonly userSessionConfig$: ReplaySubject<UserConfig | null> = new ReplaySubject<UserConfig | null>();

  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly cryptoService: CryptoService,
    private readonly storageService: StorageService,
  ) { }

  login(loginCredentials: ILogin): Observable<UserConfig> {
    return this.http.post<UserConfig>('/login', loginCredentials);
  }

  setUserSessionConfig(userConfig: UserConfig): void {
    this.storeUserSession(userConfig);
    this.router.navigate(['app']);
  }

  storeUserSession(userConfig: UserConfig): void {
    this.storageService.setLocalStorageItem(this.userLocalStorageKey, JSON.stringify(userConfig));
  }

  removeUserSession(): void {
    this.storageService.removeLocalStorageItem(this.userLocalStorageKey);
  }

  logout(): void {
    this.removeUserSession();
    this.router.navigate(['auth']);
  }

  getUserSession(): UserConfig | null {
    const storedUserSession: string | null = this.storageService.getLocalStorageItem(this.userLocalStorageKey);
    return storedUserSession ? JSON.parse(storedUserSession) : null;
  }

  isUserLoggedIn(): boolean {
    const userLogged: UserConfig | null = this.getUserSession();
    return userLogged ? true : false;
  }

  getMenu(): IMenu[] {
    const userLogged: UserConfig | null = this.getUserSession();
    return userLogged ? userLogged.menu : [];
  }

  // TODO: Falta realizar la encriptación
  // setUserSessionConfig(userConfig: UserConfig): void {
  //   try {
  //     const userEncrypted: string = this.cryptoService.encrypt(userConfig, this.userCryptoKey, true);
  //     this.storageService.setLocalStorageItem(this.userLocalStorageKey, userEncrypted),
  //     this.router.navigate(['app']);
  //   } catch (error) {
  //     this.snackbarService.openError(ErrorMessageEnum.UserSessionNotConfigured);
  //   }
  // }

  // getUserSession(): UserConfig | null {
  //   try {
  //     const userEncrypted: string | null = this.storageService.getLocalStorageItem(this.userLocalStorageKey);
  //     if (userEncrypted) {
  //       const userDecrypted: UserConfig = this.cryptoService.decrypt(userEncrypted, this.userCryptoKey, true);
  //       return userDecrypted;
  //     } else {
  //       return null;
  //     }
  //   } catch (error) {
  //     return null;
  //   }
  // }

  // getToken(): string | null | undefined {
  //   const userConfig: UserConfig | null = this.getUserSession();
  //   return userConfig?.token;
  // }

  // secureLogoutUserNotConfigured(): void {
  //   this.snackbarService.openError(ErrorMessageEnum.UserSessionNotConfigured);
  //   this.logout();
  // }

}
