import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GradeyearComponent } from './pages/gradeyear/gradeyear.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { StudentsComponent } from './pages/students/students.component';
import { ComplainsComponent } from './pages/complains/complains.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { SchaduleComponent } from './pages/schadule/schadule.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'profile',
      component:ProfileComponent
    },
    {path:'requests',
    component:RequestsComponent
  },
    {
      path:'gradyear',
      component:GradeyearComponent
    },
    {
      path:'subjects',
      component:SubjectsComponent
    },
    {
      path:'teachers',
      component:TeachersComponent
    },
    {
      path:'classroom',
      component:ClassroomComponent
    },
    {
      path:'parents',
      component:ParentsComponent
    },
    {
      path:'students',
      component:StudentsComponent
    },
    {
      path:'schadule',
      component:SchaduleComponent
    }
    ,
    {
      path:'complians',
      component:ComplainsComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
