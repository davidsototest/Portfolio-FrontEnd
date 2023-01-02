import { Component, OnInit } from '@angular/core';
import { urlImgProjects } from '../link-images/link-images';
import { Projects } from '../projectss';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-projectss',
  templateUrl: './projectss.component.html',
  styleUrls: ['./projectss.component.css']
})
export class ProjectssComponent implements OnInit {
  projects: any[];

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }

  constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
    this.serviceBackend.getProject().subscribe(resp=>{
      this.projects = resp;
    });
   }

  ngOnInit(): void {
  }

}
