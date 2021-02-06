import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage, UploadPage } from './pages';

const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'upload', component: UploadPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule {}
