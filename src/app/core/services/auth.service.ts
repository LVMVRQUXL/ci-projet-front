import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '@app/shared/models';

@Injectable()
export class AuthService {
  user$: Observable<User>;

  constructor(
    private _fireAuth: AngularFireAuth,
    private _firestore: AngularFirestore,
    private _router: Router
  ) {
    this._observeAuthState();
  }

  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this._fireAuth.signInWithPopup(provider);
    return this._updateUserData(credential.user);
  }

  async signOut() {
    await this._fireAuth.signOut();
    this._router.navigate(['/']);
  }

  private _observeAuthState() {
    this.user$ = this._fireAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this._firestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else return of(null);
      })
    );
  }

  private _updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this._firestore.doc(
      `users/${user.uid}`
    );
    const data = { uid: user.uid, email: user.email };
    return userRef.set(data, { merge: true });
  }
}
