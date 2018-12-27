import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { JumbotronComponent } from 'src/app/Pages/landing-page/jumbotron/jumbotron.component';
import { AboutComponent } from './Pages/landing-page/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoreInfoComponent } from './Pages/landing-page/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    JumbotronComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
