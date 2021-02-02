import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  private _filesRef = firebase.storage().ref().child('files');

  constructor() {}

  upload(file: File) {
    const fileName = `${Date.now()}_${file.name}`;

    console.debug(`Uploading ${fileName}...`);

    const uploadTask = this._filesRef.child(fileName).put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.debug('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.debug('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.debug('Upload is running');
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.debug('File available at', downloadURL);
        });
      }
    );
  }
}
