import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './pages';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginRoutingModule, SharedModule]
})
export class LoginModule {}
