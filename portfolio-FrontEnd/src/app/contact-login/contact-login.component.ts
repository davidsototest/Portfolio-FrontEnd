import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css']
})
export class ContactLoginComponent implements OnInit {
  contacts: Contact[]=[
    new Contact("davidSoto@testtest.com", ""),
    new Contact("linkedin.com/in/david-soto-068716220", ""),
    new Contact("linkedin.com/in/david-soto-068716220", ""),
    new Contact("linkedin.com/in/david-soto-068716220", ""),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
