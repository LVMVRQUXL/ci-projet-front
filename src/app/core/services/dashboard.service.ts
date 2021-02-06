import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { FileModel } from '@app/shared/models';

@Injectable()
export class DashboardService {
  userFiles: Observable<FileModel[]>;

  constructor(
    private _auth: AngularFireAuth,
    private _database: AngularFireDatabase
  ) {}

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
}
