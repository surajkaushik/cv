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
      educationId:['',Validators.required],
      year: ['',Validators.required],
      nameOfIns: ['',Validators.required],
      degree: ['',Validators.required],
      marks: ['',Validators.required]
    });
  }

  addEducation(){
    this.successMessage=null;
    this.errorMessage=null;
    let edu=new Education();
    edu=this.addEduForm.value;
    console.log(edu)
    this.addEducationService.addEducation(edu).subscribe(
      (success)=>{
        this.successMessage=success;
        console.log(success)
      },
      (error)=>{
        this.errorMessage="Already Available";
      }
    );
  }

}
