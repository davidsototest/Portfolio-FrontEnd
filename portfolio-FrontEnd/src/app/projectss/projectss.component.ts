import { Component, OnInit } from '@angular/core';
import { Projects } from '../projectss';

@Component({
  selector: 'app-projectss',
  templateUrl: './projectss.component.html',
  styleUrls: ['./projectss.component.css']
})
export class ProjectssComponent implements OnInit {
  projectss: Projects[]=[
    new Projects("Projecto 1", "", "", "Develeop FrontEnd Jr", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil consequuntur, quo rem voluptatibus aspernatur, odit, omnis repellendus perferendis illo fugit praesentium vero officiis voluptatem? Fuga adipisci facere quos aperiam at!"),
    new Projects("Projecto 2", "", "", "Develeop FrontEnd Jr", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil consequuntur, quo rem voluptatibus aspernatur, odit, omnis repellendus perferendis illo fugit praesentium vero officiis voluptatem? Fuga adipisci facere quos aperiam at!"),
    new Projects("Projecto 3", "", "", "Develeop FrontEnd Jr", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil consequuntur, quo rem voluptatibus aspernatur, odit, omnis repellendus perferendis illo fugit praesentium vero officiis voluptatem? Fuga adipisci facere quos aperiam at!"),
    new Projects("Projecto 4", "", "", "Develeop FrontEnd Jr", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil consequuntur, quo rem voluptatibus aspernatur, odit, omnis repellendus perferendis illo fugit praesentium vero officiis voluptatem? Fuga adipisci facere quos aperiam at!"),
  ];

    urlPhoto: string= "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fb5e01fce8b03abdef341/previews/636fb5e11fce8b03abdef34d/download/argentina-programa.png";



  constructor() { }

  ngOnInit(): void {
  }

}