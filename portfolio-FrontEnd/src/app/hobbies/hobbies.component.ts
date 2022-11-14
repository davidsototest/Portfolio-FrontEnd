import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
urlImagen: string= "https://trello.com/1/cards/636fb47e9843a200ac4ff506/attachments/636fd5af7cb0fc00c87d96a7/previews/636fd5b07cb0fc00c87d96cb/download/fotoPerfil.png";
  constructor() { }

  ngOnInit(): void {
  }

}
