import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitted:boolean=false;
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
      
    }
  }
}
