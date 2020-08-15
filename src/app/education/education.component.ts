import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';
import { Education } from 'src/model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu:Education[];
  constructor(private educationService:EducationService) { }

  ngOnInit(){
    this.edu=null;
    this.educationService.getEducation().subscribe(
      (response)=>{
        this.edu=response;
      }
    );
  }

}
