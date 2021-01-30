import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPage } from './pages';

const routes: Routes = [
  { path: 'upload', component: UploadPage },
  { path: '**', redirectTo: 'upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule {}
