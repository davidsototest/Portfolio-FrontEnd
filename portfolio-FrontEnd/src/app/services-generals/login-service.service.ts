import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactLoginComponent } from '../contact-login/contact-login.component';
import { Auth, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthFirebaseService } from '../services-generals/auth-firebase.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router,
              private authFirebase1: AuthFirebaseService
               ) {
                }

  token: boolean = false;
  retorno:boolean = false; 
  credenciales:any;
  errorCode:string;


    // Inicio de sesion
  loginFirebaseService(email:string, password:string){
        signInWithEmailAndPassword(this.authFirebase1.auth, email, password).then((userCredencial) =>{
          this.credenciales = userCredencial; 
            this.retorno = true; 
            Swal.fire({
              title: 'Inicio de sesion exitoso, Bienvenido',
              text: this.credenciales.user.email,
              icon: 'success',
              timer: 4000,
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            }); 
            })  

            .catch(function(error){
              console.log(error.code);
             if(error.code == "auth/wrong-password"){
              Swal.fire({
                icon: 'error',
                title: 'Ingresaste una contrasena Invalida!',
                text: 'Corrija! e intente nuevamente',
                showConfirmButton: true,
                confirmButtonText: 'Cerrar',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });

             } else if(error.code == "auth/user-not-found"){
              Swal.fire({
                icon: 'error',
                title: 'Ingresaste un email Invalido!',
                text: 'Corrija! e intente nuevamente',
                showConfirmButton: true,
                confirmButtonText: 'Cerrar',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });

             } else {
              Swal.fire({
                icon: 'error',
                title: 'Ups... Error inesperado!',
                text: 'Vuelva a intentar mas tarde!',
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
            })
    }

  estaLogueado(){
    return this.retorno;
    }
} 