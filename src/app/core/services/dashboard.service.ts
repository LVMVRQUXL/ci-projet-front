import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

import { FileModel } from '@app/shared/models';
import { NotificationService } from './notification.service';

@Injectable()
export class DashboardService {
  userFiles: Observable<FileModel[]>;

  constructor(
    private _auth: AngularFireAuth,
    private _database: AngularFireDatabase,
    private _storage: AngularFireStorage,
    private _notificationService: NotificationService
  ) {}

  removeFile(file: FileModel): void {
    const filePath: string = `files/${file.name}`;
    const fileRef = this._storage.ref(filePath);
    fileRef
      .delete()
      .toPromise()
      .then(() => this._removeFileRef(file))
      .catch((error) =>
        this._notificationService.notify('Un problème a eu côté serveur !')
      );
  }

  syncUserFiles() {
    this._auth.authState.subscribe(async (authState) => {
      if (null != authState) {
        const userId: string = authState.uid;
        this.userFiles = this._database
          .list<FileModel>(`users/${userId}/files`)
          .valueChanges();
      }
    });
  }

  private _removeFileRef(file: FileModel) {
    this._auth.authState.subscribe(async (authState) => {
      if (null != authState) {
        const userId: string = authState.uid;
        this._database
          .object(`users/${userId}/files/${file.id}`)
          .remove()
          .then(() =>
            this._notificationService.notify('Le fichier a bien été supprimé !')
          )
          .catch(() =>
            this._notificationService.notify('Un problème a eu côté serveur !')
          );
      }
    });
  }
}
