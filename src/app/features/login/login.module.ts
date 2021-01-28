import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './pages';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, LoginRoutingModule]
})
export class LoginModule {}
