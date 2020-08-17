import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Feedback} from '../../model/feedback'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }

  getFeedback():Observable<Feedback[]>{
    return this.http.get<Feedback[]>("http://localhost:3333/FeedbackAPI/getFeedbacks");
  }

  addFeedback(feedback:Feedback){
    return this.http.post("http://localhost:3333/FeedbackAPI/addFeedback",feedback,{responseType:"text"});
  }
}
