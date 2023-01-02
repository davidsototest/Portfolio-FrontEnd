import { Component, OnInit } from '@angular/core';
import { urlImgHobbies } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
urlImgHobbies:string=urlImgHobbies;
hobbies: any[]; 

estaLogueado(): boolean{
  return this.loginService.estaLogueado();
}

constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
  this.serviceBackend.getHobbies().subscribe(resp=>{
    this.hobbies = resp;
  });
 }

  ngOnInit(): void {
  }

} 
