
import { Component, OnInit } from '@angular/core';
import { BannerPresentation } from '../Models/BannerPresentation';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
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
    private serviceBackend:ServiceBackEndService,
    private actualizarDB: ActualizarDBService
    ) {
        this.serviceBackend.getBanner().subscribe(resp=>{
          this.bannerPresentation = resp;
        });
      
     }

    guardarBanner(){
      this.actualizarDB.postBanner(this.bannerPresentation);
      alert("Cambios Guardados: " + this.actualizarDB.respuestaPost.id + " " + this.actualizarDB.respuestaPost.name);
    }

  ngOnInit(): void {
    
  }

}
