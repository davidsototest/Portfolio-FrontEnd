import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { urlImgLogo } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css']
})
export class ContactLoginComponent implements OnInit {
  contacts: any[];

  constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
    this.serviceBackend.getContact().subscribe(resp=>{
      this.contacts = resp;
      console.log (this.contacts);
    });
   }

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }

  ngOnInit(): void {
  }

}
