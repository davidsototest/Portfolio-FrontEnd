import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerPresentation } from '../Models/BannerPresentation';

@Injectable({
  providedIn: 'root'
})
export class ActualizarDBService {
  url_banner: string;
  respuestaPost:BannerPresentation;

  constructor(private http: HttpClient) { 
    this.url_banner = 'https://backendportfoliods.onrender.com/usuario';
    }

    public postBanner( body:BannerPresentation){
      return this.http.post<BannerPresentation>(this.url_banner, body).subscribe(resp =>{
        this.respuestaPost = resp;
      })
    }

  }

