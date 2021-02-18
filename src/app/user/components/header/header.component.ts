import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';
import {ActivatedRoute, Router} from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public logser:LoginService,public ar:Router) { }


 cartIconBtn(){
  this.ar.navigateByUrl("us/cart")
 }


  ngOnInit(): void {
  }
  funLogout(){
    this.ar.navigateByUrl("us/logout")
  }
}
