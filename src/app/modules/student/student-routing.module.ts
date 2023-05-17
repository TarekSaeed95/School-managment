import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExamResultsComponent } from './pages/exam-results/exam-results.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { StudentComponent } from './student.component';
import { MaterialComponent } from './pages/materials/material.component';

const routes: Routes = [
  {
    path:'',
    component:StudentComponent,
    children:[
      {
        path:'profile',
      component:ProfileComponent
    },
    {
      path:'schedule',
      component:ScheduleComponent

    },
    {
      path:'examresults',
      component:ExamResultsComponent
    },
    {
      path:'materials',
      component:MaterialComponent
    }

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
