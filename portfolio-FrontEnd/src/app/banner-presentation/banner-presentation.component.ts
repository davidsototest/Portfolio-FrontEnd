import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { urlImgBanner, urlImgPerfil } from '../link-images/link-images';
import { BannerPresentation } from '../Models/BannerPresentation';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.css']
})
export class BannerPresentationComponent implements OnInit {
    bannerPresentation: BannerPresentation;

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }

  constructor  (
    private loginService:LoginServiceService,
    private serviceBackend:ServiceBackEndService
    ) {
        this.serviceBackend.getBanner().subscribe(resp=>{
          this.bannerPresentation = resp;
        });
      
     }

  ngOnInit(): void {
  
  }

}
