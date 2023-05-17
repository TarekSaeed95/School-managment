import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicloaderDirective } from 'src/app/directives/dynamicloader.directive';
import { RequestdetailsComponent } from '../pages/requests/requestdetails/requestdetails.component';
import { HostmanagerService } from 'src/app/services/hostmanager.service';
import { GradeyearformComponent } from '../pages/gradeyear/gradeyearform/gradeyearform.component';
import { SubjectformComponent } from '../pages/subjects/subjectform/subjectform.component';
import { TeacherformComponent } from '../pages/teachers/teacherform/teacherform.component';
import { ClassroomformComponent } from '../pages/classroom/classroomform/classroomform.component';
import { SchaduleformComponent } from '../pages/schadule/schaduleform/schaduleform.component';

@Component({
  selector: 'app-sidehost',
  templateUrl: './sidehost.component.html',
  styleUrls: ['./sidehost.component.css']
})
export class SidehostComponent implements OnInit {
  viewContainerRef:any;
  component:any
  @ViewChild(DynamicloaderDirective,{static:true})adHost!:DynamicloaderDirective;
  constructor(private hostman:HostmanagerService){}
  ngOnInit(): void {
    this.hostman.data.subscribe({
      next:res=>{
        if(res.open==true){
          this.loadcomponent(res);
        }
        if(res.open==false&&this.viewContainerRef){
          this.viewContainerRef.clear()
        }
      }
    })
  }
  public loadcomponent(data:any){
    this.viewContainerRef = this.adHost.viewContainerRef;
    this.viewContainerRef.clear();
    switch(data.type){
      case 'requestdetails':
        this.component=this.viewContainerRef.createComponent(RequestdetailsComponent);
        break;
      case 'gradeyear':
        this.component=this.viewContainerRef.createComponent(GradeyearformComponent);
        break;
      case 'subject':
        this.component=this.viewContainerRef.createComponent(SubjectformComponent);
        break;
      case 'teacher':
        this.component=this.viewContainerRef.createComponent(TeacherformComponent);
        break;
      case 'classroom':
        this.component=this.viewContainerRef.createComponent(ClassroomformComponent);
        break;
      case 'schadule':
        this.component=this.viewContainerRef.createComponent(SchaduleformComponent);
        break;
    }

  }
}
