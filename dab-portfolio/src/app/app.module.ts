import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ComputerSkillsComponent } from './components/computer-skills/computer-skills.component';
import { EducationComponent } from './components/education/education.component';
import { OtherSkillsComponent } from './components/other-skills/other-skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoneComponent } from './components/done/done.component';

//import { DatosPortfolioService } from './services/datos-portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkExperienceComponent,
    ComputerSkillsComponent,
    EducationComponent,
    OtherSkillsComponent,
    FooterComponent,
    DoneComponent,
    LoginComponent,
    PortfolioComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
