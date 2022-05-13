import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ComputerSkillsComponent } from './components/computer-skills/computer-skills.component';
import { EducationComponent } from './components/education/education.component';
import { OtherSkillsComponent } from './components/other-skills/other-skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoneComponent } from './components/done/done.component';
import { LoginComponent } from './components/login/login.component';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
