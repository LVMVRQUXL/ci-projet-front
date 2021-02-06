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

  downloadFromURL(fileUrl: string) {
    if (this._isValidUrl(fileUrl))
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
        .catch((_) =>
          this._notificationService.notify(
            'Une erreur a eu lieu pendant le téléchargement du fichier !'
          )
        );
    else this._notificationService.notify('Ce lien est invalide !');
  }

  private _isValidUrl(url: string): boolean {
    return url.startsWith('https://firebasestorage.googleapis.com/');
  }
}
