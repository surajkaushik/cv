import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  expForm: FormGroup;
  successMessage: string;

  constructor(private fb: FormBuilder, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.expForm = this.fb.group({
      experienceId: ['', Validators.required],
      year: ['', Validators.required],
      name: ['', Validators.required],
      field: ['', Validators.required]
    });
  }

  addExperience(){
    this.successMessage=null;
    this.experienceService.addExperience(this.expForm.value).subscribe(
      (success)=>{
        this.successMessage=success;
      }
    );
  }

}
