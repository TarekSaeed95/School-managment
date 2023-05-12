import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { TestimonialsSectionComponent } from './pages/mainpage/sections/testimonials-section/testimonials-section.component';
import { LandingsectionComponent } from './pages/mainpage/sections/landing-section/landing-section.component';
import { BrightFutureSectionComponent } from './pages/mainpage/sections/bright-future-section/bright-future-section.component';
import { ActivitySectionComponent } from './pages/mainpage/sections/activity-section/activity-section.component';
import { ProviderSectionComponent } from './pages/mainpage/sections/provider-section/provider-section.component';
import { TeachersComponent } from './pages/mainpage/sections/teachers/teachers.component';
import { VideoComponent } from './pages/mainpage/sections/video/video.component';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
                 NavbarComponent,
                 HomeComponent,
                 TestimonialsSectionComponent,
                 LandingsectionComponent,
                 BrightFutureSectionComponent,
                 ActivitySectionComponent,
                 ProviderSectionComponent,
                 TeachersComponent,
                 VideoComponent,
                 FooterComponent,
                 MainpageComponent,
                 ],
  imports: [CommonModule,HomeRoutingModule],
  exports: [],
  providers: [],
  bootstrap:[HomeComponent]
})
export class HomeModule {}
