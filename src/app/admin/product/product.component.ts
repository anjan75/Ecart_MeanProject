import { Component, OnInit } from '@angular/core';
import {environment} from "./../../../environments/environment"
import {ValidationPipePipe} from "./../core/pipes/validationpipe.pipe"
import {ControlContainer, FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from './../core/models/error';
import { AdminService } from './../core/services/admin.service';
import {ActivePipe} from "./../core/pipes/active.pipe"
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  errorsObject:ErrorModel={errors:{}}

  precid:any; 
  productForm:FormGroup
  subcat_data:any=null;
  subsubcat_data:any=null;
  var_cat:any=null;
  var_subcat:any=null;
  cat_data:any=null;
  brand_data:any=null;
  imgParam:[];
  cat_change=(obj)=>{
    // alert(this.var_cat)
  }
  subcat_change=(obj)=>{
    // alert(this.var_subcat)
  }
  constructor(private valPipe1:ValidationPipePipe,private ar:ActivatedRoute, private pfb1:FormBuilder,private serAdmin:AdminService, private fb:FormBuilder,private valPipe:ValidationPipePipe,private ap:ActivePipe) 
  {
    this.ar.params.subscribe(dt=>{
      var originalString = dt.names; 
      if(dt.names)
      {
       this.imgParam= originalString.split(','); 
       alert("sub exec...")
       var oldid=localStorage.getItem("orid")
     // localStorage.removeItem("orid")
        var image={
         image_name:this.imgParam,
         id:oldid 
     }
      //var obj={id:localStorage.getItem("orid"),image_name:dt.names}
      this.serAdmin.productServices().serUpdateProductImagesNames(image).subscribe(dt=>{
        alert("Updated")
      })
    }
    })
    this.productForm=this.pfb1.group({
      productName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      price:new FormControl("",[Validators.required,Validators.minLength(3)]),
      cat_id:new FormControl("",[Validators.required,Validators.minLength(3)]),
      subcat_id:new FormControl("",[Validators.required,Validators.minLength(3)]),
      subsubcat_id:new FormControl("",[Validators.required,Validators.minLength(3)]),
      description:new FormControl("",[Validators.required,Validators.minLength(3)]),
      size:new FormControl("",[Validators.required,Validators.minLength(3)]),
      brand:new FormControl("",[Validators.required,Validators.minLength(3)]),
      type:new FormControl("",[Validators.required,Validators.minLength(3)]),
      discountPrice:new FormControl("",[Validators.required,Validators.minLength(3)]),
      rating:new FormControl("",[Validators.required,Validators.minLength(3)]),
      offers:new FormControl("",[Validators.required,Validators.minLength(3)]),
      image_name:new FormControl("",[Validators.required,Validators.minLength(3)]),
      colors:new FormControl("",[Validators.required,Validators.minLength(3)]),
      
      
  })

    //this.getProduct()
    if(this.serAdmin.service_cat_data!=null)
    this.cat_data=this.serAdmin.service_cat_data
    else
    {
      this.serAdmin.categoryServices().serGetCategory().subscribe(dt=>{
        this.cat_data=dt;
      })
    }
    // alert(this.serAdmin.service_cat_data)
    if(this.serAdmin.service_subcat_data!=null)
    this.subcat_data=this.serAdmin.service_subcat_data
    else
    {
      this.serAdmin.subCategory().serGetSubCategory().subscribe(dt=>{
        this.subcat_data=dt;
        // alert(this.subcat_data)
      })
    }
 //this.getProduct()
 if(this.serAdmin.service_subsubcat_data!=null)
 this.subsubcat_data=this.serAdmin.service_subsubcat_data
 else
 {
   this.serAdmin.subSubCategory().serGetSubSubCategory().subscribe(dt=>{
     this.subsubcat_data=dt;
   })
 }


  }
  formcontclick()
  {
    alert("hii")
  //   if(!this.productForm.valid)
  // {
  //   var obj={errors:{}} 
  //   Object.keys(this.productForm.controls).forEach((key) => {
  //     const controlErrors:ValidationErrors=this.productForm.get(key).errors
  //     if(controlErrors!=null)
  //     {
  //       Object.keys(controlErrors).forEach(errorMessage=>{
  //         var em=environment[errorMessage]
  //         var str=this.valPipe1.transform(em,controlErrors)
  //         obj.errors[key]=str
  //       })
  //     }
  //   });
  //   this.errorsObject=obj
  // }
  // else
  {
    alert("inn")
    var p_name=this.productForm.controls.productName.value
    var pr_name=this.productForm.controls.price.value
    var c_name=this.productForm.controls.cat_id.value
    var sc_name=this.productForm.controls.subcat_id.value
    var ssc_name=this.productForm.controls.subsubcat_id.value
    var des=this.productForm.controls.description.value
    var sz=this.productForm.controls.size.value
    var b_name=this.productForm.controls.brand.value
    var t_name=this.productForm.controls.type.value
    var d_pr=this.productForm.controls.discountPrice.value
    var r_nam=this.productForm.controls.rating.value
    var of_name=this.productForm.controls.offers.value
    //var im_name=this.productForm.controls.image_name.value
    var color_name=this.productForm.controls.colors.value
   
  
    var data={
      "productName":p_name,
      "price":pr_name,
      "cat_id":c_name,
      "subcat_id":sc_name,
      "subsubcat_id":ssc_name,
      "description":des,
      "size":sz,
      "brand":b_name,
      "type":t_name,
      "discountPrice":d_pr,
      "rating":r_nam,
      "offers":of_name,
      "colors":color_name
      //"image_name":im_name
    }

console.log(data)
this.serAdmin.productServices().serInsertProduct(data).subscribe((dt:any)=>{
  localStorage.setItem("orid",dt._id)
  var frm=<HTMLFormElement>document.getElementById("frm1")
  frm.submit()
})
      // console.log(this.productForm.value)
    
   
  


    }
  }
}
