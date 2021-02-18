import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin.service';
import decode from "jwt-decode" 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private ser:AdminService) { }
  txtuname:string
  txtpwd:string;
  ngOnInit(): void {
  }
  funLogin(){
    var obj={
      username:this.txtuname,password:this.txtpwd
    }
    this.ser.adminAuth().serAdminAuth(obj).subscribe((dt:any)=>{
      localStorage.setItem("token",dt.token)
      var token_data=decode(dt.token)
      console.log(token_data)
    })
  }
}
