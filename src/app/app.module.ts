import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/HomePage/navbar/navbar.component';
import { LandingsectionComponent } from './Pages/HomePage/landing-section/landing-section.component';
import { BrightFutureSectionComponent } from './Pages/HomePage/bright-future-section/bright-future-section.component';
import { TestimonialsSectionComponent } from './Pages/HomePage/testimonials-section/testimonials-section.component';
import { HomePageComponent } from './Pages/HomePage/home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingsectionComponent,
    BrightFutureSectionComponent,
    TestimonialsSectionComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
