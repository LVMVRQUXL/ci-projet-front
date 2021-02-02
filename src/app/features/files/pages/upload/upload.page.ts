import { Component, OnInit } from '@angular/core';

import { NotificationService, UploadService } from '@app/core/services';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.css']
})
export class UploadPage implements OnInit {
  files: File[] = [];

  constructor(
    private _notificationService: NotificationService,
    private _uploadService: UploadService
  ) {}

  ngOnInit(): void {}

  onSelect(event) {
    console.debug(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.debug(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload() {
    this.files.forEach((file: File): void => {
      const fileName = `${Date.now()}_${file.name}`;
      this._uploadService.upload(file, fileName, (downloadURL) => {
        console.debug(`downloadURL = ${downloadURL}`);
        this._notificationService.notify(`Partage terminé !`);
      });
    });
  }
}
