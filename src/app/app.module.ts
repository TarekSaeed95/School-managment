// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppCustomLayoutComponent } from './layout/app-custom-layout/app-custom-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { HomePageComponent } from './modules/home/page/home-page.component';
import { HomeModule } from './modules/home/home.module';
@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
