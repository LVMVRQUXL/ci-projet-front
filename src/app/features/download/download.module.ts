import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { DownloadRoutingModule } from './download-routing.module';
import { DownloadPage } from './pages';

@NgModule({
  declarations: [DownloadPage],
  imports: [CommonModule, DownloadRoutingModule, FormsModule, SharedModule]
})
export class DownloadModule {}
