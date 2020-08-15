import { Component, OnInit } from '@angular/core';
import {ContactMeService} from './contact-me.service'
import { Person } from '../shared/model/person';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  list:Person[];

  constructor(private contactMeService:ContactMeService) { }

  ngOnInit(){
    this.list=null;
    this.contactMeService.getAllPerson().subscribe(
      (reponse)=>{
        this.list=reponse;
      }
    );
  }

}
