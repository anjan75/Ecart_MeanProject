import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {DbserviceService} from "../../core/services/dbservice.service"
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  btnTxt:string="Register";
  authorizedUser:boolean=false;
  active:number;
  path:any;

  constructor(public route:ActivatedRoute,private rt:Router,
    private logser:LoginService, private fb:FormBuilder,private serdbservice:DbserviceService) {
   // this.route.params.subscribe(dt=>{
    // alert(dt)
    //  var activeted=dt.em;
  //  })

    this.loginForm=this.fb.group({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])

    })
  }
  

  ngOnInit(): void {
    this.route.url.subscribe((dt:any)=>{
      this. path=(dt[0].path)
      this.btnTxt=(this.path==="reg") ? "Register" : "Login"
      if(this.path==="reg"){
        this.loginForm.addControl("firstname",new FormControl("",Validators.required))
        this.loginForm.addControl("lastname",new FormControl("",Validators.required))
        this.loginForm.addControl("address",new FormControl("",Validators.required))
  
        }
    }
    )}
  
    funsubmit()
    {
      if(this.btnTxt==="Login")
      {
        alert("login exec");
        
              var obj={
                emailid:this.loginForm.controls.email.value,
                pwd:this.loginForm.controls.password.value
                }
              // this.authser.serUserAuth(obj).subscribe((dt:any)=>{
                //alert(obj)
                //console.log(obj)
                this.serdbservice.loginInfo().serUserLoginAuth(obj).subscribe((dt:any)=>{
                 
                 // alert("....hi");
                  //alert(dt)
                  //console.log(dt)
                  if(dt.invalid)
                  {
                    //console.log(dt)

                    alert("Invalid username or password")
                  }
                  else{
                    if(dt.noactive){
                     // this.active=0;
                      alert("Account is not activated")
                    }
                    else
                    {
                      alert("Login Success")
                     // this.active=1;
                      localStorage.setItem("token",dt.auth)
                      this.authorizedUser=true;
                      this.rt.navigateByUrl("us/cart")
                      this.logser.logintmp=true
                    }
                  }
                })
      }
      else
      {
        //this.loginForm=this.fb.group({
         // email:new FormControl("",[Validators.required]),
         // password:new FormControl("",[Validators.required]),
         // firstname:new FormControl("",[Validators.required]),
         // lastname:new FormControl("",[Validators.required]),
         // address:new FormControl("",[Validators.required])
    
        //})
         // alert("reg exec");
        var registerObj={
          email:this.loginForm.controls.email.value,
          password:this.loginForm.controls.password.value,
          firstname:this.loginForm.controls.firstname.value,
          lastname:this.loginForm.controls.lastname.value,
          address:this.loginForm.controls.address.value,
          //active:0
          //active:this.active
         };
         this.serdbservice.regInfo().serUserRegistrationAuth(registerObj).subscribe((dt:any)=>{
          //localStorage.setItem("orid",dt._id)
           alert("Registration success")
           //alert(dt)
         })
  
  
      }
      }
    }

