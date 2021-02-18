import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 public pro_data:any=[];

  constructor() { 
    this.getCartdata()
    

  }
  // delData(){

  //   if(localStorage.getItem("token")){
  //     alert("user token is availble ");
    
  //   }else{
      
      

  //   }

  // }
  getCartdata(){
    // alert("cartdata")
 
     this.pro_data= JSON.parse(localStorage.getItem("prod"));
      
  }

  ngOnInit(): void {

 //this.pro_data= JSON.parse(localStorage.getItem("prod"));
 
  }


}
