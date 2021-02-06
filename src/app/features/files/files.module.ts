import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { SharedModule } from '@app/shared/shared.module';
import { FilesRoutingModule } from './files-routing.module';
import { DashboardPage, UploadPage } from './pages';

@NgModule({
  declarations: [DashboardPage, UploadPage],
  imports: [CommonModule, NgxDropzoneModule, SharedModule, FilesRoutingModule]
})
export class FilesModule {}
