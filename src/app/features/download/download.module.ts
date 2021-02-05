import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadPage } from './pages';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DownloadPage],
  imports: [CommonModule, DownloadRoutingModule, MatButtonModule, FormsModule]
})
export class DownloadModule { }
