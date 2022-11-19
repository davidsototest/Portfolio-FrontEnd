import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { urlImgWorksExperience } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  urlImgWorkExperience:string=urlImgWorksExperience;

  educations: Education[]=[
    new Education("Tecnico en Informatica", "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fb5e01fce8b03abdef341/previews/636fb5e11fce8b03abdef34d/download/argentina-programa.png", "Venezuela - Universidad Nacional Experimental Politécnica de la Fuerza Armada", "3 anios", "Universitario"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
  ];

    urlPhoto: string= "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fb5e01fce8b03abdef341/previews/636fb5e11fce8b03abdef34d/download/argentina-programa.png";

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }

    constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

}
