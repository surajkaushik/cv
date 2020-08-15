import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(private http:HttpClient) { }

  getAllPerson():Observable<Person[]>{
    return this.http.get<Person[]>("http://localhost:3333/PersonAPI/getAllPerson");
  }

}
