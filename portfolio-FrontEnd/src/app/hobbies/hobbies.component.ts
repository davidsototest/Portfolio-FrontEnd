import { Component, OnInit } from '@angular/core';
import { urlImgHobbies } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
urlImgHobbies:string=urlImgHobbies;
 

estaLogueado(): boolean{
  return this.loginService.estaLogueado();
}


constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

}
