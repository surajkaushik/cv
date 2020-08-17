import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/model/experience';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp:Experience[];
  
  constructor(private experienceService:ExperienceService) { }

  ngOnInit() {
    this.exp=null;
    this.experienceService.getExperience().subscribe(
      (response)=>{
        this.exp=response;
      }
    );
  }
  

}
