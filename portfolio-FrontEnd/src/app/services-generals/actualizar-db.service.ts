import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerPresentation } from '../Models/BannerPresentation';
import { WordModel } from '../Models/Word';

@Injectable({
  providedIn: 'root'
})
export class ActualizarDBService {
  url_banner: string;
  url_word: any;

  respuestaPost:BannerPresentation;
  respuestaWord:any;
  respuestaAddWord:WordModel;
  respuestaDeleteWord:any;


  constructor(private http: HttpClient) { 
    this.url_banner = 'https://backendportfoliods.onrender.com/usuario';
    this.url_word = 'https://backendportfoliods.onrender.com/word';
    }

    public postBanner( body:BannerPresentation){
      return this.http.post<BannerPresentation>(this.url_banner, body).subscribe(resp =>{
        this.respuestaPost = resp;
      })
    }

    public postWord (body:string) {
      return this.http.post<any>(this.url_word, body).subscribe(resp =>{
        this.respuestaAddWord = resp;
      })
    }

    public addWord (body:WordModel){
      return this.http.post<WordModel>(this.url_word, body).subscribe(resp =>{
        this.respuestaWord = resp;
      });
    }

    public deleteWord(id:number){
      return this.http.delete<number>(this.url_word+"/"+id).subscribe(resp =>{
        this.respuestaDeleteWord = resp;
      })
    }

  }

