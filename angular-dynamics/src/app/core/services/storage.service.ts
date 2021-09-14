import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocalStorageItem(name: string, item: string): void {
    localStorage.setItem(name, item);
  }

  getLocalStorageItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  removeLocalStorageItem(name: string): void {
    localStorage.removeItem(name);
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  setSessionStorageItem(name: string, item: string): void {
    sessionStorage.setItem(name, item);
  }

  getSessionStorageItem(name: string): string | null {
    return sessionStorage.getItem(name);
  }

  removeSessionStorageItem(name: string): void {
    sessionStorage.removeItem(name);
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }

}
