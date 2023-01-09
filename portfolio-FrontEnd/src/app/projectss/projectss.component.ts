import { Component, OnInit } from '@angular/core';
import { urlImgProjects } from '../link-images/link-images';
import { ProjectModel } from '../Models/ProjectModel';
import { Projects } from '../projectss';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-projectss',
  templateUrl: './projectss.component.html',
  styleUrls: ['./projectss.component.css']
})
export class ProjectssComponent implements OnInit {
  projects: any[];

  name:string;
  descripProject:string;
  urlFotoProject:string;
  urlProject:string;

    estaLogueado(): boolean{
      return this.loginService.estaLogueado();
    }

  constructor(
    private loginService:LoginServiceService, 
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService) {
    this.serviceBackend.getProject().subscribe(resp=>{
      this.projects = resp;
    });
   }

   addDBProject(){
    let projectAdd = new ProjectModel(this.name, this.descripProject, this.urlFotoProject, this.urlProject); 
    this.actualizarDBservice.addProject(projectAdd);
    alert("Se agrego Proyecto: " + projectAdd.name_project);
    this.serviceBackend.getProject().subscribe(resp=>{
      this.projects = resp;
  
      this.name = "";
      this.descripProject = "";
      this.urlFotoProject = "";
      this.urlProject = "";
    });
   }

   actualizarDBProject(){
    for (let i = 0; i <= this.projects.length; i++ ){
      if(this.projects[i] != null){
        this.actualizarDBservice.postProject(this.projects[i]);
      } else{
        console.log("el indice del array: " + i + " esta vacio");
      }
    }
    alert("Modificación Exitosa");
   }

   deleteDBProject(id:number){
    this.actualizarDBservice.deleteProject(id);
    alert (this.actualizarDBservice.respuestaDeleteProject);
   }

  ngOnInit(): void {
  }

}
