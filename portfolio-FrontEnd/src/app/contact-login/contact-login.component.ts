import { Component, OnInit } from '@angular/core';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthFirebaseService } from '../services-generals/auth-firebase.service';
import Swal from 'sweetalert2';
// import { AuthFirebaseService } from '../services-generals/auth-firebase.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css'] 
})
export class ContactLoginComponent implements OnInit {
  contacts: any;
  credenciales:any;
  form:any = {
    email: "",
    password: "",
  }
  
  constructor(
    private loginService:LoginServiceService, 
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService,
    private auth:AuthFirebaseService 
    ) {
    this.serviceBackend.getContact().subscribe(resp=>{
      this.contacts = resp;
      console.log (this.contacts);
    });
   } 

  // Inicio de sesion
  loginFirebase(){

    if(this.form.email.length > 8 && this.form.password.length >= 6){
      this.loginService.loginFirebaseService(this.form.email, this.form.password);

    } else if (this.form.email.length <= 8){
      Swal.fire({
        icon: 'error',
        title: 'Ingresaste un email Invalido!',
        text: 'Corrija e intente nuevamente',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

    } else if (this.form.password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Ingresaste una contrasena Invalida!',
        text: 'Minimo 6 caracteres',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } 
  }
    
  

  //estado de los botones 
  conectado(){
    return this.loginService.estaLogueado();
   }

  // cerrar de sesion
  signOut(){
    this.auth.cerrarSesion();
    this.loginService.retorno = false;
    window.location.reload();
  }


  // estaLogueado(){ 
  //   return false;
  //   // this.loginService.estaLogueado();
  //   // return this.loginService.retorno;
  // }

  actualizarDBContact(contac:any){
    this.actualizarDBservice.postContact(contac);
      alert(this.actualizarDBservice.respuestaPostContact);
  }


  ngOnInit(): void {
  }

}
