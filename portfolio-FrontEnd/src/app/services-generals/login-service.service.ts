import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router) { }

  token: boolean = false;

  estaLogueado(){
    return this.token;
  }


}
