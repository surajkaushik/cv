import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EducationComponent } from './education/education.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ContactMeService } from './contact-me/contact-me.service'
import { HttpClientModule } from '@angular/common/http';
import { EducationService } from './education/education.service';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { CertificationComponent } from './certification/certification.component';
import { CertificationService } from './certification/certification.service';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceService } from './experience/experience.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackService } from './feedback/feedback.service';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddCertificateComponent } from './certification/add-certificate/add-certificate.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactMeComponent,
    EducationComponent,
    TechnicalSkillsComponent,
    AddEducationComponent,
    CertificationComponent,
    ExperienceComponent,
    FeedbackComponent,
    ViewFeedbackComponent,
    AddCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactMeService,
    EducationService,
    CertificationService,
    ExperienceService,
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
