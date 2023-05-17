import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetPassword',
  templateUrl: './forgetPassword.component.html',
  styleUrls: ['./forgetPassword.component.css','../style.css']
})
export class ForgetPasswordComponent {
  loadflag:boolean=false;
  formresponce:boolean=false;
  message:string='';
  typemess:string=''
  changepassword(passwordform:any){
    if(passwordform.valid){
      this.loadflag=true;
            setTimeout(()=>{
        this.formresponce=true
        this.typemess='success';
        this.message='check your email'
      },1000);
    }
  }
}
