import { Component, OnInit } from '@angular/core';
import { Education } from '../education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[]=[
    new Education("Tecnico en Informatica", "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fb5e01fce8b03abdef341/previews/636fb5e11fce8b03abdef34d/download/argentina-programa.png", "Venezuela - Universidad Nacional Experimental Politécnica de la Fuerza Armada", "3 anios", "Universitario"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
  ];

    urlPhoto: string= "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fb5e01fce8b03abdef341/previews/636fb5e11fce8b03abdef34d/download/argentina-programa.png";

  constructor() { }

  ngOnInit(): void {
  }

}
