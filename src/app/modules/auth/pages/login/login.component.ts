import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  typepassword:string="password";
  changetypepassword(){
    if(this.typepassword==="password"){
        this.typepassword="text";
    }
    else{
      this.typepassword="password";
    }
  }
  login(form:any){
    if(form.valid){
      
    }
  }
}
