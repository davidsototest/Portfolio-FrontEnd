import { Component, OnInit } from '@angular/core';
import { Education } from '../education';
import { urlImgWorksExperience } from '../link-images/link-images';
import { EducationModel } from '../Models/Education';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any[];

  name:string;
  nivel:string;
  duration:string;
  academia:string;
  url_logo:string;
  
  conectado(){
    return this.loginService.estaLogueado();
   }

    constructor(
      private loginService:LoginServiceService, 
      private serviceBackend:ServiceBackEndService,
      private actualizarDBservice: ActualizarDBService) { 
      this.serviceBackend.getEducation().subscribe(resp=>{ 
        this.educations = resp;
      });
    }

    addEdu(){
      let eduAdd = new EducationModel(this.name, this.nivel, this.duration, this.academia, this.url_logo);
      this.actualizarDBservice.addEdu(eduAdd);
      alert("Se agrego una nueva Educación: " + eduAdd.name_education);
      this.serviceBackend.getEducation().subscribe(resp=>{ 
        this.educations = resp;
        this.name = "";
        this.nivel = "";
        this.duration = "";
        this.academia = "";
        this.url_logo = "";
      });
    }

    actualizarDBEdu(){
      for (let i = 0; i <= this.educations.length; i++ ){
        if(this.educations[i] != null){
          this.actualizarDBservice.postEdu(this.educations[i]);
        } else{
          console.log("el indice del array: " + i + " esta vacio");
        }
      }
      alert("Modificación Exitosa");
    }

    deleteDBEdu(id:number){
      this.actualizarDBservice.deleteEdu(id);
      alert (this.actualizarDBservice.respuestaDeleteEdu);
     }


  ngOnInit(): void {
  }

}
