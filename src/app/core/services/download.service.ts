import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { saveAs } from 'file-saver';

import { NotificationService } from './notification.service';

@Injectable()
export class DownloadService {
  constructor(
    private _notificationService: NotificationService,
    private _storage: AngularFireStorage
  ) {}

  // TODO: An error should occurre when given link is invalid
  downloadFromURL(fileUrl: string) {
    this._storage
      .refFromURL(fileUrl)
      .getDownloadURL()
      .toPromise()
      .then((url: string) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (_) => {
          var blob = xhr.response;
          saveAs(blob);
          this._notificationService.notify(
            'Le fichier a bien été téléchargé !'
          );
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((_) => {
        this._notificationService.notify('Ce lien est invalide !');
      });
  }
}
