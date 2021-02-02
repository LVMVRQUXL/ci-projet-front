import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable()
export class UploadService {
  constructor(private _storage: AngularFireStorage) {}

  upload(file: File, fileName: String, onFinalize: (downloadURL) => void) {
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
            .then((value) => onFinalize(value))
        )
      )
      .subscribe();
  }
}
