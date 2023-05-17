import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { gradyear } from 'src/app/data/gradyear';
import { subject } from 'src/app/data/subject';
import { GradyearService } from 'src/app/services/gradyear.service';
import { HostmanagerService } from 'src/app/services/hostmanager.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subjectform',
  templateUrl: './subjectform.component.html',
  styleUrls: ['./subjectform.component.css']
})
export class SubjectformComponent {
  id:number=-1;
  gradeyears:gradyear[]=[];
  subject:FormGroup=new FormGroup({
    subname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    gradeYearId:new FormControl('',[Validators.required]),  
  });
  errormess:string=''
  constructor(private gradeyearservice:GradyearService,private subjectservice:SubjectService,private hostman:HostmanagerService){}
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
    return this.subject.controls['subname']
  }
  get gradecontrol(){
    return this.subject.controls['gradeYearId']
  }
  addsubject(){
    if(this.subject.valid){
      if(this.id!=-1){
      }
      else{
        let gradeindex=this.gradeyears.findIndex(p=>p.id==+this.gradecontrol.value)
        let subject:subject={
          id:0,
          name: this.namecontrol.value,
          gradeYearId: +this.gradecontrol.value,
          gradeYearName: this.gradeyears[gradeindex].name
        }
        console.log(subject)
        this.subjectservice.post(subject).subscribe({
          next:data=>{
            subject.id=data.id;
            this.hostman.load({data:'',open:false,returndata:subject,type:''})
          },
          error:err=>{
            this.errormess="not allow";
          }
        })
      }
      }
  }
  close(){
    this.hostman.load({open:false,data:'',returndata:'',type:''});
  }
}
