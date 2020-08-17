import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from 'src/model/education';

@Injectable({
  providedIn: 'root'
})
export class AddEducationService {

  constructor(private http:HttpClient) { }

  addEducation(education:Education){
    return this.http.post<string>("http://localhost:3333/EducationAPI/addEducation",education);
  }
}
