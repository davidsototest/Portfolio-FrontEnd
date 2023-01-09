import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { urlImgLogo } from '../link-images/link-images';
import { BannerPresentation } from '../Models/BannerPresentation';
import { ContactModel } from '../Models/ContactsModel';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css'] 
})
export class ContactLoginComponent implements OnInit {
  contacts: ContactModel;
  bannerr: BannerPresentation;

  constructor(
    private loginService:LoginServiceService, 
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService) {
    this.serviceBackend.getContact().subscribe(resp=>{
      this.contacts = resp;
      console.log (this.contacts);
    });

    this.serviceBackend.getBanner().subscribe(respo=>{
      this.bannerr = respo;    
    });
   }

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }

  actualizarDBContact(){
    this.actualizarDBservice.postContact(this.contacts);
      alert(this.actualizarDBservice.respuestaPostContact);
  }


  ngOnInit(): void {
  }

}
