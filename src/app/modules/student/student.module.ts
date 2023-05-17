import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MaterialComponent } from './pages/materials/material.component';
import { ExamResultsComponent } from './pages/exam-results/exam-results.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { StudentComponent } from './student.component';
import { SidehostComponent } from './sidehost/sidehost.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ScheduleComponent,
    MaterialComponent,
    ExamResultsComponent,
    HeaderComponent,
    NavbarComponent,
    StudentComponent,
    SidehostComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  bootstrap:[StudentComponent]
})
export class StudentModule { }
