import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from 'src/model/education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  constructor(private http:HttpClient) { }

  addEducation(education:Education):Observable<string>{
    return this.http.post("http://localhost:3333/EducationAPI/addEducation",education,{responseType:"text"});
  }
}
