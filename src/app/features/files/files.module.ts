import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { SharedModule } from '@app/shared/shared.module';
import { FilesRoutingModule } from './files-routing.module';
import { UploadPage } from './pages/upload/upload.page';

@NgModule({
  declarations: [UploadPage],
  imports: [CommonModule, NgxDropzoneModule, SharedModule, FilesRoutingModule]
})
export class FilesModule {}
