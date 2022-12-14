import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactLoginComponent } from './contact-login/contact-login.component';
import { BannerPresentationComponent } from './banner-presentation/banner-presentation.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { HardSoftSkillsComponent } from './hard-soft-skills/hard-soft-skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProjectssComponent } from './projectss/projectss.component';
import { BannerPresentationUpdateComponent } from './banner-presentation-update/banner-presentation-update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactLoginComponent,
    BannerPresentationComponent,
    WorkExperienceComponent,
    EducationComponent,
    HardSoftSkillsComponent,
    HobbiesComponent,
    FooterComponent,
    ProjectssComponent,
    BannerPresentationUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
