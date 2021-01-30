import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { FilesRoutingModule } from './files-routing.module';
import { UploadPage } from './pages/upload/upload.page';

@NgModule({
  declarations: [UploadPage],
  imports: [CommonModule, NgxDropzoneModule, FilesRoutingModule]
})
export class FilesModule {}
