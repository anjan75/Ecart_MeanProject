import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {APIcontroller} from "../../../shared/common/common"
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  

  constructor(private ht:HttpClient) { }
  public categoryServices(){
    return{
      serGetCategory:()=>{
      return this.ht.get(`${APIcontroller.catAPI}/getCategory`)
      .pipe(map(dt=>{
        //this.service_cat_data=dt;
        //alert(this.service_cat_data)

        return dt;
      }))
      }
    }
  }
  public subCategory(){
    return{
      serGetSubCategory:()=>{
      return this.ht.get(`${APIcontroller.subCatAPI}/getSubCategory`).pipe(map(dt=>{

        //this.service_subcat_data=dt;
        return dt;
      }))
    }
  }
 }
 public subSubCategory(){
  return{
    serGetSubSubCategory:()=>{
    return this.ht.get(`${APIcontroller.subSubCatAPI}/getSubSubCategory`).pipe(map(dt=>{

      //this.service_subsubcat_data=dt;
      return dt;
    }))
   }
  }
 }
  public productlistbysubsubcategory(){
    return{
      serGetProductList:(subsubcategoryid:any)=>{
        return this.ht.post(`${APIcontroller.productApi}/productListBySubSubCatId`,subsubcategoryid)
      }
    }
  }
  public productdinfobyId(){
    return{
      setGetProductdisbyId:(product_id:any)=>{
        return this.ht.post(`${APIcontroller.productApi}/productListInfo`,product_id)
      }
    }
  }

  public loginInfo(){
  return{
     serUserLoginAuth:(obj:any)=>{
     return this.ht.post(`${APIcontroller.userAuthApi}/userLogin`,obj)
    
      }
  }
}



  public regInfo(){
    return{
    serUserRegistrationAuth:(obj:any)=>{
     
    return this.ht.post(`${APIcontroller.userRegApi}/userRegistration`,obj)
    }
  }
   }


public userServices(){
 return{
    serUpdateActive:(obj:any)=>{
      return this.ht.post(`${APIcontroller.activeApi}/updateUserActive`,obj)

    }
  }
  
}


}
