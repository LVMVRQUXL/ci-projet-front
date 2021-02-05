import { Component, OnInit } from '@angular/core';
import {DownloadService, NotificationService} from "@app/core/services";
import {NgForm} from "@angular/forms";

declare var require: any
const FileSaver = require('file-saver')

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.css']
})

export class DownloadPage implements OnInit {

  constructor(
      private _notificationService: NotificationService,
      private _downloadService: DownloadService) {};

  ngOnInit(): void {
  }

  private hasError = false;

  unavailableUrl() { return this.hasError; }

  download(form: NgForm) {
    let fullUrl = form.value['downloadUrl'];
    try {
      this._downloadService.getUrl(fullUrl);
      FileSaver.saveAs(fullUrl);
      this.hasError = false;
    }catch (e) {
      console.log(e.toString());
      this.hasError = true;
    }
  }

}
