import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable()
export class UploadService {
  constructor(
    private _auth: AngularFireAuth,
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
    this._auth.authState.subscribe(async (authState) => {
      if (authState !== null) {
        const userId: string = authState.uid;
        console.debug(`userId = ${userId}`);
        await this._database.object(`users/${userId}/files/${fileId}`).set({
          downloadURL,
          id: fileId,
          name: fileName,
          shortName: fileShortName
        });
      }
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
