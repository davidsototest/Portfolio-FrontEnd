import { Component, OnInit } from '@angular/core';
import { Education } from '../education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Education[]=[
    new Education("Tecnico en Informatica", "", "Venezuela - Universidad Nacional Experimental Politécnica de la Fuerza Armada", "3 anios", "Universitario"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
    new Education("test test", "", "Argentina", "1 anio", "Tecnicatura"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
