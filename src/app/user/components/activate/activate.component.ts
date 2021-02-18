import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DbserviceService} from "../../core/services/dbservice.service"

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent  {
selectedemail:any;
  constructor(private serdbservice:DbserviceService,private ar:ActivatedRoute) { 

    this.ar.params.subscribe(dt=>{
      var originalString = dt.em; 
      alert(originalString)
      if(dt.em)
      {
       this.selectedemail= originalString.split(';'); 
     
       
      var emailobj={
      email:this.selectedemail
      //active:1
      }

   

    console.log(emailobj)
    
    this.serdbservice.userServices().serUpdateActive(emailobj).subscribe(dt=>{
    alert("UserActivated")
    })
    
   
  }
})
  }
}
    
 


