import { Component, OnInit } from '@angular/core';
import { urlImgBanner, urlImgPerfil } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-banner-presentation',
  templateUrl: './banner-presentation.component.html',
  styleUrls: ['./banner-presentation.component.css']
})
export class BannerPresentationComponent implements OnInit {
    urlImgBanner:string=urlImgBanner;
    urlImgPerfil: string=urlImgPerfil;


    presentation1: string[] = [
      "David",
      "Soto",
      "Full Stack Developer Jr",
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,  comes from a line in section 1.10.32.",
    ];

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }


  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

}
