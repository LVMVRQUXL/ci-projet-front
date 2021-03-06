import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import {
  AuthService,
  DashboardService,
  DownloadService,
  NavigationService,
  NotificationService,
  UploadService
} from './services';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    DashboardService,
    DownloadService,
    NavigationService,
    NotificationService,
    UploadService
  ]
})
export class CoreModule {}
