import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ComputerSkillsComponent } from './components/computer-skills/computer-skills.component';
import { EducationComponent } from './components/education/education.component';
import { OtherSkillsComponent } from './components/other-skills/other-skills.component';
import { AddSectionComponent } from './components/add-section/add-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkExperienceComponent,
    ComputerSkillsComponent,
    EducationComponent,
    OtherSkillsComponent,
    AddSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }