import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesModule } from './features/files/files.module';
import { LoginModule } from './features/login/login.module';

const routes: Routes = [
  { path: 'files', loadChildren: _loadFilesModule },
  { path: 'login', loadChildren: _loadLoginModule },
  { path: '**', redirectTo: 'files', pathMatch: 'full' } // TODO: update redirections before merging
];

async function _loadFilesModule(): Promise<FilesModule> {
  return (await import('./features/files/files.module')).FilesModule;
}

async function _loadLoginModule(): Promise<LoginModule> {
  return (await import('./features/login/login.module')).LoginModule;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
