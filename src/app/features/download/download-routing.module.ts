import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadPage } from "@app/features/download/pages";

const routes: Routes = [
  { path: '', component: DownloadPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadRoutingModule { }
