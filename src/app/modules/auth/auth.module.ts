import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthlayoutComponent } from './pages/authlayout/authlayout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './pages/forgetPassword/forgetPassword.component';
import { MessagerespnceComponent } from './pages/messagerespnce/messagerespnce.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent,
    AuthlayoutComponent,
    ForgetPasswordComponent,
    MessagerespnceComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap:[LoginComponent]
})
export class AuthModule { }
