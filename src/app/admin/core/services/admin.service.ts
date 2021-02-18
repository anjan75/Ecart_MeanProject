import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {APIcontroller} from "../../../shared/common/common"
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  service_cat_data:any=null;
  service_subcat_data:any=null;
  service_subsubcat_data:any=null;
  service_brand_data:any=null;
  constructor(private ht:HttpClient){
    
  }
  public categoryServices(){
    return{
      serGetCategory:()=>{
      return this.ht.get(`${APIcontroller.catAPI}/getCategory`)
      .pipe(map(dt=>{
        this.service_cat_data=dt;
        alert(this.service_cat_data)

        return dt;
      }))
      },
        serPostCategory:(obj)=>{
          alert("hi")
        return this.ht.post(`${APIcontroller.catAPI}/insCategory`,obj);
      },
      serUpdateCategory:(obj)=>{
        return this.ht.post(`${APIcontroller.catAPI}/updateCategory`,obj)
      }
    }
  }
  public subCategory(){
    return{
      serGetSubCategory:()=>{
      return this.ht.get(`${APIcontroller.subCatAPI}/getSubCategory`).pipe(map(dt=>{

        this.service_subcat_data=dt;
        return dt;
      }))
    },
        serPostSubCategory:(obj)=>{
          alert("hi")
        return this.ht.post(`${APIcontroller.subCatAPI}/insSubCategory`,obj);
      },
      serUpdatesubCategory:(obj)=>{
        return this.ht.post(`${APIcontroller.subCatAPI}/updatesubCategory`,obj)
      }
    }
  }
  public subSubCategory(){
    return{
      serGetSubSubCategory:()=>{
      return this.ht.get(`${APIcontroller.subSubCatAPI}/getSubSubCategory`).pipe(map(dt=>{

        this.service_subsubcat_data=dt;
        return dt;
      }))
    },
        serPostSubSubCategory:(obj)=>{
          alert("hi")
        return this.ht.post(`${APIcontroller.subSubCatAPI}/insSubSubCategory`,obj);
      },
      serUpdatesubsubCategory:(obj)=>{
        return this.ht.post(`${APIcontroller.subSubCatAPI}/updatesubsubCategory`,obj)
      }
    }
  }
  public productServices(){
    return{
      serInsertProduct:(obj)=>{
        return this.ht.post(`${APIcontroller.productApi}/insProduct`,obj)
      },
      serGetproduct:()=>{
      return this.ht.get(`${APIcontroller.productApi}/getProduct`)
      },
        serPostproduct:(obj)=>{
        return this.ht.post(`${APIcontroller.productApi}/insSubSubCategory`,obj);
      },
      serUpdateproduct:(obj)=>{
        return this.ht.post(`${APIcontroller.productApi}/updatesubsubCategory`,obj)
      },
      serUpdateProductImagesNames:(obj)=>{
        return this.ht.post(`${APIcontroller.productApi}/updateProjectImageName`,obj)

      }
    }
    
  }
  public adminAuth(){
    return{
      serAdminAuth:(obj)=>{
        return this.ht.post(`${APIcontroller.adminAuthAPI}/adminAuth`,obj)
      }
    }
  }
    
  
}


