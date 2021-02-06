import { Component, OnInit } from '@angular/core';

import { AuthService, NavigationService } from '@app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthService,
    private _navigationService: NavigationService
  ) {}

  ngOnInit(): void {}

  goToDashboardPage() {
    this._navigationService
      .goToDashboardPage()
      .then((_) => window.location.reload());
  }

  goToDownloadPage() {
    this._navigationService
      .goToDownloadPage()
      .then((_) => window.location.reload());
  }

  goToUploadPage() {
    this._navigationService
      .goToUploadPage()
      .then((_) => window.location.reload());
  }
}
