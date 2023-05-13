import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../style.css']
})
export class LoginComponent {
  typepassword:string="password";
  loadflag:boolean=false;
  
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
      this.loadflag=true;
    }
  }
}
