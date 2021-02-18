import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {DbserviceService} from "../../core/services/dbservice.service"

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
 public moreInfo:any;
 public bigImg:any;
 offer:any;
  ratArr:any=[];
  halfstr:boolean=false;
//   constructor(private rt:Router,private ar:ActivatedRoute,private serdbservice:DbserviceService) { 
   
//     this.ar.params.subscribe(dt=>{
     
//       var product_id=dt.prodid;
     
//         this.serdbservice.productdinfobyId()
//         .setGetProductdisbyId({prodid:product_id})
//         .subscribe((data)=> {
//           alert(data[0])
//           this.moreInfo=data[0];
//          //alert(this.moreInfo.image_name)
//           this.bigImg=data[0].image_name[0];
//           this.offer=data[0].offers.split(',');
//           var rating=data[0].rating;
          
//           for(var i=1;i<=rating;i++)
//           {
//             this.ratArr.push(i);
//           }
//           if(rating>0)
//           {
//             this.halfstr=true;
//           }
         

//         });
             
        
     
//     })
//    }
//    funAddtoCart(data){
//      alert("more data")
//     // if(localStorage.getItem("token"))
//     // {
//     //   alert("Login Success")
//     //  // this.rt.navigateByUrl("us/cart")
//     // }
//     // else{
//       if(localStorage.getItem("prod"))
//       {
//         var arr:any=[]
//         var pro_data=localStorage.getItem("prod")
//         var newarr=JSON.parse(pro_data)
//         for (var i=0;i<newarr.length;i++)
//         {
//           arr.push((newarr[i]))
//         }
//         arr.push((data))
//         localStorage.setItem("prod",JSON.stringify(arr))
//         this.rt.navigateByUrl("us/cart")
//       }
//       else
//       {
//       var arr:any=[]
//       arr.push(data)
//       localStorage.setItem("prod",JSON.stringify(arr))
//       this.rt.navigateByUrl("us/cart");
//       }
//     }
//   // }
  


//   ngOnInit(): void {
//   }

// }


constructor(private rt:Router,private ar:ActivatedRoute,private serdbservice:DbserviceService) { 
   
  this.ar.params.subscribe(dt=>{
   
    var product_id=dt.prodid;
   
      this.serdbservice.productdinfobyId()
      .setGetProductdisbyId({prodid:product_id})
      .subscribe((data)=> {
        alert(data[0])
        this.moreInfo=data[0];
       //alert(this.moreInfo.image_name)
        this.bigImg=data[0].image_name[0];
        this.offer=data[0].offers.split(',');
        var rating=data[0].rating;
        
        for(var i=1;i<=rating;i++)
        {
          this.ratArr.push(i);
        }
        if(rating>0)
        {
          this.halfstr=true;
        }
       

      });
           
      
   
  })
 }
 funAddtoCart(data){

  // if(localStorage.getItem("token"))
  // {
  //   alert("Login Success")
  
  // }
  // else{
    if(localStorage.getItem("prod"))
    {
      var arr:any=[]
      var pro_data=localStorage.getItem("prod")
      var newarr=JSON.parse(pro_data)
      for (var i=0;i<newarr.length;i++)
      {
        arr.push((newarr[i]))
      }
      arr.push((data))
      localStorage.setItem("prod",JSON.stringify(arr))
      this.rt.navigateByUrl("us/cart");
    }
    else
    {
      var arr:any=[]
      arr.push(data)
    localStorage.setItem("prod",JSON.stringify(arr))
    alert("cart")
    this.rt.navigateByUrl("us/cart");

    }
  }
//  }



ngOnInit(): void {
}

}