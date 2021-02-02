import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class UploadService {
  constructor(
    private _authService: AuthService,
    private _database: AngularFireDatabase,
    private _storage: AngularFireStorage
  ) {}

  async saveFileRef(
    fileName: string,
    fileShortName: string,
    fileId: number
  ): Promise<void> {
    const filePath: string = `files/${fileName}`;
    const fileRef = this._storage.ref(filePath);
    const downloadURL: string = await fileRef.getDownloadURL().toPromise();
    const userId: string = this._authService.currentUserId;
    await this._database.object(`users/${userId}/files/${fileId}`).set({
      downloadURL,
      id: fileId,
      name: fileName,
      shortName: fileShortName
    });
  }

  upload(file: File, fileName: String, onFinalize: () => void) {
    const filePath: string = `files/${fileName}`;
    const task = this._storage.upload(filePath, file);
    const fileRef = this._storage.ref(filePath);
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef
            .getDownloadURL()
            .toPromise()
            .then(() => onFinalize())
        )
      )
      .subscribe();
  }
}
