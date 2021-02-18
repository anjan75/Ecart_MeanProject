import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{
  
canActivate(){
  if(localStorage.getItem("token"))
  {
    return true;
  }
  else{
    this.rt.navigateByUrl("ad/log")
  return false;
  }
}
constructor(private rt:Router){
}
}
