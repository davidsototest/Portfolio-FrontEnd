import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BannerPresentation } from '../Models/BannerPresentation';

@Injectable({
  providedIn: 'root'
})
export class ServiceBackEndService {
  url='https://backendportfoliods.onrender.com/usuario/1';
  

  constructor(private http:HttpClient) {
    console.log('')
  }

    getBanner(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/BannerPresentation')
      return this.http.get<BannerPresentation>(this.url, {headers: header});
    }
}
