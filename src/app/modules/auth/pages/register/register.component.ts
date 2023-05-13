import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','../style.css']
})
export class RegisterComponent {
  submitted:boolean=false;
  loadflag:boolean=false;
  formresponce:boolean=false;
  message:string='';
  typemess:string='';
  registerform:FormGroup=new FormGroup({
    studentfname:new FormControl('',[Validators.required]),
    studentage:new FormControl('',[Validators.required]),
    parentname:new FormControl('',[Validators.required]),
    parentemail:new FormControl('',[Validators.required])
  });
  get studentfnamecontrol(){
    return this.registerform.controls['studentfname']
  }
  get studentagecontrol(){
    return this.registerform.controls['studentage']
  }
  get parentnamecontrol(){
    return this.registerform.controls['parentname']
  }
  get parentemailcontrol(){
    return this.registerform.controls['parentemail']
  }
  register(){
    this.submitted=true;
    if(this.registerform.valid){
      this.loadflag=true;
      setTimeout(()=>{
        this.formresponce=true;
        this.typemess='success';
        this.message='Registration was successful. We have sent you an email with your login information. Please use them to log into your account.'
      },1000);
    }
  }
}
