import { Component, OnInit } from '@angular/core';
import { WordModel } from '../Models/Word';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent implements OnInit {
  wordExperience: any[];
 // wordAdd:WordModel;
  wordE: any;

  name:string;
  job:string;
  chores:string;
  duration:string;
  url_logo:string;
  
  estaLogueado(): boolean{
    return this.loginService.estaLogueado();
  }

constructor(
  private loginService:LoginServiceService, 
  private serviceBackend:ServiceBackEndService,
  private actualizarDBservice: ActualizarDBService) {

  this.serviceBackend.getWord().subscribe(resp=>{
    this.wordExperience = resp; 
    console.log (resp); 
    
  });
 }

 actualizarDB(){
  for (let i = 0; i <= this.wordExperience.length; i++ ){
    if(this.wordExperience[i] != null){
      this.actualizarDBservice.postWord(this.wordExperience[i]);
    } else{
      console.log("el indice del array: " + i + " esta vacio");
    }
  }
  alert("Modificación Exitosa");
 }

 addDB(){
  let wordAdd = new WordModel(this.name, this.job, this.chores, this.duration, this.url_logo); 
  this.actualizarDBservice.addWord(wordAdd);
  alert("Se agrego la Experiencia Laboral: " + wordAdd.name_business);
    this.serviceBackend.getWord().subscribe(resp=>{
    this.wordExperience = resp;
    this.name = "";
    this.job = "";
    this.chores = "";
    this.duration = "";
    this.url_logo = "";
  });
 }

 deleteDB(id:number){
  this.actualizarDBservice.deleteWord(id);
  alert (this.actualizarDBservice.respuestaDeleteWord);
 }
 
  ngOnInit(): void {
    
  }

}
