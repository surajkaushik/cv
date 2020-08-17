import { Component, OnInit } from '@angular/core';
import { CertificationService } from './certification.service';
import { Certificate } from 'src/model/certificate';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certificate:Certificate[];
  constructor(private certificationService:CertificationService) { }

  ngOnInit(){
    this.certificate=null;
    this.certificationService.getAllCertificates().subscribe(
      (success)=>{
        this.certificate=success;
      }
    );
  }

}
