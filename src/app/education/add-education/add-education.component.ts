import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddEducationService } from '../add-education/add-education.service'
import { Education } from 'src/model/education';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  addEduForm: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(private fb: FormBuilder, private addEducationService: AddEducationService) { }

  ngOnInit() {
    this.addEduForm = this.fb.group({
      year: ['',Validators.required],
      nameOfIns: ['',Validators.required],
      degree: ['',Validators.required],
      marks: ['',Validators.required]
    });
  }

  addEducation(){
    this.successMessage=null;
    this.errorMessage=null;
    this.addEducationService.addEducation(this.addEduForm.value).subscribe(
      (success)=>{
        this.successMessage=success;
      },
      (error)=>{
        this.errorMessage="Already Available";
      }
    );
  }

}
