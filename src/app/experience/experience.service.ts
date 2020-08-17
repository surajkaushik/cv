import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Experience} from '../../model/experience'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  constructor(private http:HttpClient) { }

  addExperience(exp:Experience){
    return this.http.post("http://localhost:3333/ExperienceAPI/addExperince",exp,{responseType:"text"});
  }

  getExperience():Observable<Experience[]>{
    return this.http.get<Experience[]>("http://localhost:3333/ExperienceAPI/getExperienceList");
  }
}
