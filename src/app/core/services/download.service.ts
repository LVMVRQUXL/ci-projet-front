import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable()
export class DownloadService {
  constructor(
    private _storage: AngularFireStorage
  ) {}


  getUrl(fileUrl: string) {
    return this._storage.refFromURL(fileUrl).getDownloadURL();
  }
}
