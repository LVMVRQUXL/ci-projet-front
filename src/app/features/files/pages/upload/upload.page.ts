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
      const currentDate: number = Date.now();
      const fileName = `${currentDate}_${file.name}`;
      this._uploadService.upload(file, fileName, () => {
        this._uploadService
          .saveFileRef(fileName, file.name, currentDate)
          .then(() => this._notificationService.notify(`Partage terminé !`));
      });
    });
  }
}
