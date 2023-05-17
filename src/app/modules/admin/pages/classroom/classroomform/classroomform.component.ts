import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { classroom } from 'src/app/data/classroom';
import { gradyear } from 'src/app/data/gradyear';
import { ClassroomService } from 'src/app/services/classroom.service';
import { GradyearService } from 'src/app/services/gradyear.service';
import { HostmanagerService } from 'src/app/services/hostmanager.service';

@Component({
  selector: 'app-classroomform',
  templateUrl: './classroomform.component.html',
  styleUrls: ['./classroomform.component.css']
})
export class ClassroomformComponent {
  id:number=-1;
  gradeyears:gradyear[]=[];
  classroom:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
    gradeYearId:new FormControl('',[Validators.required]),  
  });
  errormess:string=''
  constructor(private gradeyearservice:GradyearService,private classroomservices:ClassroomService,private hostman:HostmanagerService){}
  ngOnInit(): void {
    let subscriber1=this.gradeyearservice.getall().subscribe({
      next:res=>{
        this.gradeyears=res;
        subscriber1.unsubscribe()
      }
    })
    let subscriber2=this.hostman.data.subscribe({
      next:res=>{
        if(res.data.id){
          this.id=res.data.id;
          this.namecontrol.setValue(res.data.name);
          subscriber2.unsubscribe()

        }
      }
    })
  }
  get namecontrol(){
    return this.classroom.controls['name']
  }
  get gradecontrol(){
    return this.classroom.controls['gradeYearId']
  }
  addclassroom(){
    if(this.classroom.valid){
      if(this.id!=-1){

      }
      else{
        let classroom:classroom={
          id:0,
          name: this.namecontrol.value,
          gradeYearId: +this.gradecontrol.value,
          gradeYearName: this.gradeyears[+this.gradecontrol.value].name
        }
        console.log(classroom)
        this.classroomservices.post(classroom).subscribe({
          next:data=>{
            classroom.id=data.id;
            this.hostman.load({data:'',open:false,returndata:classroom,type:''})
          },
          error:err=>{
            this.errormess=err.message;
            console.log(err)
          }
        })
      }
      }
  }
  close(){
    this.hostman.load({open:false,data:'',returndata:'',type:''});
  }
}
