import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './pages/forgetPassword/forgetPassword.component';
import { LayoutauthComponent } from './pages/layoutauth/layoutauth.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'',
    component:LayoutauthComponent,
    children:[
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:'forgetpassword',component:ForgetPasswordComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
