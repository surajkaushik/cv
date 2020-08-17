import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Feedback } from 'src/model/feedback';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedback:Feedback[];

  constructor(private feedbackService:FeedbackService) { }

  ngOnInit() {
    this.feedbackService.getFeedback().subscribe(
      (success)=>{
        this.feedback=success;
      }
    );
  }


}
