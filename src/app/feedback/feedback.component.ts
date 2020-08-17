import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from './feedback.service';
import { Feedback } from 'src/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackform:FormGroup;
  successMessage:string;

  constructor(private fb:FormBuilder,private feedbackService:FeedbackService) { }

  ngOnInit(){
    this.feedbackform=this.fb.group({
      emailId:['',[Validators.required,Validators.email]],
      name:['',Validators.required],
      comments:['',[Validators.required,Validators.minLength(10),Validators.maxLength(4000)]]
    });
  }

  addFeedback(){
    this.successMessage=null;
    this.feedbackService.addFeedback(this.feedbackform.value).subscribe(
      (succes)=>{
        this.successMessage=succes;
      }
    );
  }

}
