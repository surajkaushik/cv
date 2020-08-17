import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Certificate}  from '../../model/certificate'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http:HttpClient) { }

  addCertificate(certificate:Certificate){
    return this.http.post("http://localhost:3333/CertificationAPI/addCertificate",certificate,{responseType:"text"})
  }

  getAllCertificates():Observable<Certificate[]>{
    return this.http.get<Certificate[]>("http://localhost:3333/CertificationAPI/getCertifications");
  }
}
