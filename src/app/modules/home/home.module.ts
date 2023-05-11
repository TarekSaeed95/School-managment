import { NgModule } from '@angular/core';
import { HomePageComponent } from './page/home-page.component';
import { TestimonialsSectionComponent } from './page/testimonials-section/testimonials-section.component';
import { LandingsectionComponent } from './page/landing-section/landing-section.component';
import { BrightFutureSectionComponent } from './page/bright-future-section/bright-future-section.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomePageComponent,TestimonialsSectionComponent,LandingsectionComponent,BrightFutureSectionComponent],
  imports: [HomeRoutingModule],
  exports: [],
  providers: []
})
export class HomeModule {}
