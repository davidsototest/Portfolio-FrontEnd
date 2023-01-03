import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { urlImgLogo } from '../link-images/link-images';
import { BannerPresentation } from '../Models/BannerPresentation';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css']
})
export class ContactLoginComponent implements OnInit {
  contacts: any[];
  bannerr: BannerPresentation;

  constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
    this.serviceBackend.getContact().subscribe(resp=>{
      this.contacts = resp;
    });

    this.serviceBackend.getBanner().subscribe(respo=>{
      this.bannerr = respo;    
    });
   }

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }

  ngOnInit(): void {
  }

}
