import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DownloadService } from '@app/core/services';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.css']
})
export class DownloadPage implements OnInit {
  constructor(private _downloadService: DownloadService) {}

  ngOnInit(): void {}

  download(form: NgForm) {
    let fullUrl = form.value['downloadUrl'];
    this._downloadService.downloadFromURL(fullUrl);
  }
}
