import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';


@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  valor3:number=50;
  skills: any[];

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }


constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
  this.serviceBackend.getSkill().subscribe(resp=>{
    this.skills = resp;
  });
 }

  ngOnInit(): void {
  }

}
