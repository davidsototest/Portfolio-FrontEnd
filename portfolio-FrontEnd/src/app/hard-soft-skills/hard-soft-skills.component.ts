import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services-generals/login-service.service';


@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  valor3:number=50;

  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }


constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

}
