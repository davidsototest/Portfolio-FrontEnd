import { Component, OnInit } from '@angular/core';
import { urlImgWorksExperience } from '../link-images/link-images';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';
import { Work } from '../works.model';
 
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  wordExperience: any[];
  
  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }

constructor(private loginService:LoginServiceService, private serviceBackend:ServiceBackEndService) {
  this.serviceBackend.getWord().subscribe(resp=>{
    this.wordExperience = resp;
    
  });
 }
 
  ngOnInit(): void {
  }

}
