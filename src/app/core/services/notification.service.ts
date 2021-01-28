import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const _CONFIG: MatSnackBarConfig = {
  duration: 3000,
  panelClass: 'notification'
};

@Injectable()
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  notify(content: string): void {
    this._snackBar.open(content, undefined, _CONFIG);
  }
}
