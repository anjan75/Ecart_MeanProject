import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 logintmp:boolean=false;
  constructor() { 
    if(localStorage.getItem("token"))
    this.logintmp=true;
  }
}
