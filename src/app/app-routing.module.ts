import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EducationComponent } from './education/education.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { AddEducationComponent } from './education/add-education/add-education.component';
import { CertificationComponent } from './certification/certification.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddCertificateComponent } from './certification/add-certificate/add-certificate.component';
import { AddExperienceComponent } from './experience/add-experience/add-experience.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact', component:ContactMeComponent},
  {path:'education', component:EducationComponent},
  {path:'tskill', component:TechnicalSkillsComponent},
  {path:'addEdu',component:AddEducationComponent},
  {path:'certification',component:CertificationComponent},
  {path:'exp',component:ExperienceComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'feedback/viewFeedBack',component:ViewFeedbackComponent},
  {path:'certification/addCertificate',component:AddCertificateComponent},
  {path:'exp/addExp',component:AddExperienceComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
