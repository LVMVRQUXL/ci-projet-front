import {NgModule} from '@angular/core';
import {
    AuthPipe,
    canActivate,
    redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import {Routes, RouterModule} from '@angular/router';

import {DownloadModule} from './features/download/download.module'
import {FilesModule} from './features/files/files.module';
import {LoginModule} from './features/login/login.module';

const routes: Routes = [
    {path: 'download', loadChildren: _loadDownloadModule},
    {
        path: 'files',
        loadChildren: _loadFilesModule,
        ...canActivate(_redirectUnauthorizedToLogin)
    },
    {path: 'login', loadChildren: _loadLoginModule},
    {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

async function _loadDownloadModule(): Promise<DownloadModule> {
    return (await import('./features/download/download.module')).DownloadModule
}

async function _loadFilesModule(): Promise<FilesModule> {
    return (await import('./features/files/files.module')).FilesModule;
}

async function _loadLoginModule(): Promise<LoginModule> {
    return (await import('./features/login/login.module')).LoginModule;
}

function _redirectUnauthorizedToLogin(): AuthPipe {
    return redirectUnauthorizedTo(['login']);
}

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
