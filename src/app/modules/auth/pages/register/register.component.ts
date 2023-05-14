import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { request } from 'src/app/data/request';
import { AuthserviceService } from 'src/app/services/authservice.service';

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
  stdimage:any="../../../../../assets/images/studentreg.png"
  patimage:any="../../../../../assets/images/parentreg.png"

  registerform:FormGroup=new FormGroup({
    studentFirstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    studentEmail: new FormControl('',[Validators.required,Validators.email]),
    studentGender: new FormControl(0,[Validators.required]),
    studentPhone: new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$")]),
    studentBirthDate: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)]),
    parentFullName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    parentEmail: new FormControl('',[Validators.required,Validators.email]),
    parentPhone: new FormControl('',[Validators.required,Validators.pattern("^(010|011|012|015)[0-9]{8}$")]),
    studentPhotoUrl: new FormControl('',[]),
    identityParentPhotoUrl: new FormControl('',[]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  constructor(private authservice:AuthserviceService){}
  get stdFnameControl(){
    return this.registerform.controls['studentFirstName']
  }
  get stdEmailControl(){
    return this.registerform.controls['studentEmail']
  }
  get stdGenderControl(){
    return this.registerform.controls['studentGender']
  }
  get stdPhoneControl(){
    return this.registerform.controls['studentPhone']
  }
  get stdBDControl(){
    return this.registerform.controls['studentBirthDate']
  }
  get addressControl(){
    return this.registerform.controls['address']
  }
  get patFNameControl(){
    return this.registerform.controls['parentFullName']
  }
  get patEmailControl(){
    return this.registerform.controls['parentEmail']
  }
  get patphoneControl(){
    return this.registerform.controls['parentPhone']
  }
  get stdPhotoControl(){
    return this.registerform.controls['studentPhotoUrl']
  }
  get patPhotoControl(){
    return this.registerform.controls['identityParentPhotoUrl']
  }
  get passwordControl(){
    return this.registerform.controls['password']
  }
  changephoto(image:any,person:number){
    console.log(image)
    var reader = new FileReader();
		reader.readAsDataURL(image.target.files[0]);
		reader.onload = (_event) => {
      if(person==0)
			  this.stdimage = reader.result; 
      else
        this.patimage = reader.result;
		}
  }
  register(){
    this.submitted=true;
    if(this.registerform.valid){
        this.loadflag=true;
        let user:request={
          ...this.registerform.value
        }
        user.studentGender=+user.studentGender;
        this.authservice.createrequest(user).subscribe(
        val=>{
          console.log(val);
          this.formresponce=true;
          this.typemess='success';
          this.message='Registration was successful. We will contact with you in 24 hour';
        },
        err=>{
          console.log(err)
          this.formresponce=true;
          this.typemess='failed';
          this.message='Registration was faild!';
        });
    }
  }
}
