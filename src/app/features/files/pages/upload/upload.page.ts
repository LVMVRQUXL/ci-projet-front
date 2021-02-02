import { Component, OnInit } from '@angular/core';

import { UploadService } from '@app/core/services';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.css']
})
export class UploadPage implements OnInit {
  files: File[] = [];

  constructor(private _uploadService: UploadService) {}

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  upload() {
    this.files.forEach((file: File): void => this._uploadService.upload(file));
  }
}
