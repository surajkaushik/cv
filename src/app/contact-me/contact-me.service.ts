import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(private http:HttpClient) { }

  getAllPerson():Observable<Person[]>{
    return this.http.get<Person[]>("http://localhost:3333/PersonAPI/getAllPerson")
    .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg:string='';
    if (err.error instanceof Error) {   
        errMsg=err.error.message;
        console.log(errMsg)
    }
     else if(typeof err.error === 'string'){
        errMsg=JSON.parse(err.error).message
    }
    else {
       if(err.status==0){ 
           errMsg="A connection to back end can not be established.";
       }else{
           errMsg=err.error.message;
       }
     }
        return throwError(errMsg);
}
}
