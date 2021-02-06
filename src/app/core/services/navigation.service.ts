import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(private _router: Router) {}

  async goToDownloadPage(): Promise<boolean> {
    await this._resetUrl();
    return this._router.navigate(['download']);
  }

  async goToLoginPage(): Promise<boolean> {
    await this._resetUrl();
    return this._router.navigate(['login']);
  }

  async goToUploadPage(): Promise<boolean> {
    await this._resetUrl();
    return this._router.navigate(['files', 'upload']);
  }

  private _resetUrl(): Promise<boolean> {
    return this._router.navigateByUrl('/', { skipLocationChange: false });
  }
}
