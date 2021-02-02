import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import firebase from 'firebase/app';

import { environment } from '@environments/environment';
import {
  AuthService,
  NavigationService,
  NotificationService,
  UploadService
} from './services';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    NavigationService,
    NotificationService,
    UploadService
  ]
})
export class CoreModule {}
