import { Component, OnInit } from '@angular/core';
import { Work } from '../works.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  works: Work[]=[
    new Work("Estacion radial Viva 96.9 FM", "", " 2 anios", "Analista de sistemas", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor"),
    new Work("Globons S.A.", "", " 1 anio (Actualmente)", "Analista de sistemas (Tester QA)", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor"),
    new Work("Example test", "", " 3 anio (Actualmente)", "Analista de sistemas (Tester QA)", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor"),
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}
