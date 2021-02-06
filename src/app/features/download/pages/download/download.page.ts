import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DownloadService, NavigationService } from '@app/core/services';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.css']
})
export class DownloadPage implements OnInit {
  private _goBack: boolean = false;

  constructor(
    private _downloadService: DownloadService,
    private _navigationService: NavigationService
  ) {}

  ngOnInit(): void {}

  download(form: NgForm) {
    if (!this._goBack) {
      const fullUrl: string = form.value['downloadUrl'];
      this._downloadService.downloadFromURL(fullUrl);
    }
  }

  goBack(): void {
    this._goBack = true;
    this._navigationService.goToLoginPage();
  }
}
