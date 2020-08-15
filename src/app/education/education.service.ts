import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {Education} from '../../model/education'
@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  getEducation():Observable<Education[]>{
    return this.http.get<Education[]>("http://localhost:3333/EducationAPI/getEducationList");
  }

}
