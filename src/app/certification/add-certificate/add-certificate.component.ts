import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CertificationService} from '../certification.service'

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {
  certificateForm: FormGroup;
  successMessage:string;

  constructor(private fb:FormBuilder,private certificationService:CertificationService) { }

  ngOnInit(){
    this.certificateForm=this.fb.group({
      certificateId:['',Validators.required],
      certificateName:['',Validators.required],
      certificateURL:['',Validators.required]
    });
  }

  addCertificate(){
    this.successMessage=null;
    this.certificationService.addCertificate(this.certificateForm.value)
    .subscribe(
      (success)=>{
        this.successMessage=success;
      }
    );
  }

}
