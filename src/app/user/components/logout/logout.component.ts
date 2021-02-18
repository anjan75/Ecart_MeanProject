import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private loginser:LoginService ) { 
    localStorage.clear()
    this.loginser.logintmp=false;
  }

  ngOnInit(): void {
  }

}
