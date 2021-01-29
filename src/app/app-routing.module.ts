import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './features/login/login.module';

const routes: Routes = [
  { path: 'login', loadChildren: _loadLoginModule },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

async function _loadLoginModule(): Promise<LoginModule> {
  return (await import('./features/login/login.module')).LoginModule;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
