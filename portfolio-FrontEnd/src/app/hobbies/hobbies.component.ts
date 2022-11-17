import { Component, OnInit } from '@angular/core';
import { urlImgHobbies } from '../link-images/link-images';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
urlImgHobbies:string=urlImgHobbies;
  constructor() { }

  ngOnInit(): void {
  }

}
