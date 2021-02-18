import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  pro_data:any=[];
  constructor() { 

    this.getCartData()
  }


  getCartData(){
    this.pro_data= JSON.parse(localStorage.getItem("prod"));
      
  }

  delFun(id){
    alert(id)
    var arr=[];
    //this.pro_data= JSON.parse(localStorage.getItem("prod"));
   
    // alert(JSON.stringify(this.pro_data._id))
    for (var i=0; i<this.pro_data.length; i++)
    {
      if(id!=this.pro_data[i]._id)
      {
        alert("not matched")
        arr.push(this.pro_data[i]);
      }
      else{
        alert("matched")
      }
    }
    localStorage.setItem("prod", JSON.stringify(arr))
    this.getCartData();
   
  }

  ngOnInit(): void {
 

  }


  
}
