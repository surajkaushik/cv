import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact', component:ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
