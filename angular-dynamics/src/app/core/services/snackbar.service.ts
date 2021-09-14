import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Enums
import { FormMessageEnum } from '@core/enums';

// Components
import { SnackbarTemplateComponent } from '@shared/angular-material/components/snackbar-template/snackbar-template.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  private readonly defaultDuration = 4000;

  constructor(
    private readonly matSnackBar: MatSnackBar
  ) { }

  openError(message: string, action: string = '', duration: number = this.defaultDuration): void {
    this.matSnackBar.openFromComponent(SnackbarTemplateComponent, {
      duration,
      panelClass: 'snackbar-error',
      data: { message, action }
    });
  }

  openSuccess(message: string, action: string = '', duration: number = this.defaultDuration): void {
    this.matSnackBar.openFromComponent(SnackbarTemplateComponent, {
      duration,
      panelClass: 'snackbar-success',
      data: { message, action }
    });
  }

  openWarning(message: string, action: string = '', duration: number = this.defaultDuration): void {
    this.matSnackBar.openFromComponent(SnackbarTemplateComponent, {
      duration,
      panelClass: 'snackbar-warning',
      data: { message, action }
    });
  }

  openDefault(message: string, action: string = '', duration: number = this.defaultDuration): void {
    this.matSnackBar.openFromComponent(SnackbarTemplateComponent, {
      duration,
      data: { message, action }
    });
  }

  openFormValidationError(action: string = '', duration: number = this.defaultDuration): void {
    this.matSnackBar.openFromComponent(SnackbarTemplateComponent, {
      duration,
      panelClass: 'snackbar-warning',
      data: { message: FormMessageEnum.ReviewForm, action }
    });
  }

}
