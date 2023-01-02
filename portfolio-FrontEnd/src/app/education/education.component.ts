import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { urlImgWorksExperience } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any[];

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }

    constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) { 
      this.serviceBackend.getEducation().subscribe(resp=>{ 
        this.educations = resp;
      });
    }

  ngOnInit(): void {
  }

}
