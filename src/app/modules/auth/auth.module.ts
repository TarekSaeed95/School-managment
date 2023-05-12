import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  bootstrap:[LoginComponent]
})
export class AuthModule { }
