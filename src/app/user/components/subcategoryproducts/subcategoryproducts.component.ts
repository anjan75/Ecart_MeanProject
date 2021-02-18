import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DbserviceService} from "../../core/services/dbservice.service"

@Component({
  selector: 'app-subcategoryproducts',
  templateUrl: './subcategoryproducts.component.html',
  styleUrls: ['./subcategoryproducts.component.scss']
})
export class SubcategoryproductsComponent implements OnInit {
productData:any=null;

  constructor(private ar:ActivatedRoute,private serdbservice:DbserviceService) { 
   
    this.ar.params.subscribe(dt=>{
      alert(dt.subsubcatid)
      var subsubcategoryid=dt.subsubcatid;
     
      console.log(dt.subsubcatid)
      
     // console.log(obj)
      if(dt.subsubcatid){
        this.serdbservice.productlistbysubsubcategory()
        .serGetProductList({subsubcat_id:subsubcategoryid})
        .subscribe((data)=> {
          this.productData=data;
        }
      
        );
        
      }
    })
   }
  

  ngOnInit(): void {
  }

}
