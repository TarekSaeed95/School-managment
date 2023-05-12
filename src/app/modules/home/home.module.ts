import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ActivitySectionComponent } from './mainpage/sections/activity-section/activity-section.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TestimonialsSectionComponent } from './mainpage/sections/testimonials-section/testimonials-section.component';
import { LandingsectionComponent } from './mainpage/sections/landing-section/landing-section.component';
import { BrightFutureSectionComponent } from './mainpage/sections/bright-future-section/bright-future-section.component';
import { ProviderSectionComponent } from './mainpage/sections/provider-section/provider-section.component';
import { TeachersComponent } from './mainpage/sections/teachers/teachers.component';
import { VideoComponent } from './mainpage/sections/video/video.component';

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
  imports: [HomeRoutingModule],
  exports: [],
  providers: [],
  bootstrap:[HomeComponent]
})
export class HomeModule {}
