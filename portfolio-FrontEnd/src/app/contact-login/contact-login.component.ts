import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { urlImgLogo } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css']
})
export class ContactLoginComponent implements OnInit {
  constructor(private loginService:LoginServiceService) { }

  urlImgArgentinaPrograma:string=urlImgLogo;

  gmail:string="test@gmail.com";
  linkedin:string="linkedin.com/in/david-soto-068716220";
  discord:string="Discord.com";
  instagram:string="instagram.com";

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }



  ngOnInit(): void {
  }

}
