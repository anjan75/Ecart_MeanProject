import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment"
import {ValidationPipePipe} from "../../core/pipes/validationpipe.pipe"
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from '../../core/models/error';
import { AdminService } from '../../core/services/admin.service';
import {ActivePipe} from "../../core/pipes/active.pipe"
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent  {
  subcategorys:any=null;
  categorys:any=null;
  constructor(private serAdmin:AdminService,private serAdmin1:AdminService, private fb1:FormBuilder,private valPipe1:ValidationPipePipe,private ap:ActivePipe ) 
  {
    this.getCategory()
    this.subgetCategory()
    this.subcategoryForm=this.fb1.group({
      subcategoryname:new FormControl("",[Validators.required,Validators.minLength(7)]),
      categoryname:new FormControl("",[Validators.required,Validators.minLength(7)])
 
  })
 }
 activeFormatter=(cellData)=>{
  return this.ap.transform(cellData.value)
}
  colData:any=[
    {headerName:"category name",field:"data_cat.category_name", sortable:true},
    {headerName:"sub category name",field:"sub_category_name", editable:true,onCellValueChanged:this.editCell.bind(this,"sub_category_name"),sortable:true,filter:true}]
  editCell(colname,obj){
    var cname=colname
    var cdata=obj.data[colname]
    // alert(cname)
    // alert(cdata)
    this.serAdmin.subCategory()
.serUpdatesubCategory({id:obj.data["_id"],columnName:cname,columnData:cdata})
.subscribe(dt=>{
 console.log(dt)
 this.getCategory()
this.subgetCategory()
})

  }
  selectedValue:any;
 
  
errorsObject:ErrorModel={errors:{}}
  subcategoryForm:FormGroup
   
   getCategory(){
    if(this.serAdmin1.service_cat_data!=null)
    this.categorys=this.serAdmin1.service_cat_data
    else
    {
      this.serAdmin1.categoryServices().serGetCategory().subscribe(dt=>{
        this.categorys=dt;
        })
    }
  
  }
  subgetCategory()
  {
    if(this.serAdmin1.service_subcat_data!=null)
    this.subcategorys=this.serAdmin1.service_subcat_data
    else
    {
      this.serAdmin1.subCategory().serGetSubCategory().subscribe(dt1=>{
        this.subcategorys=dt1;
        })
    }
   
  }
  insertSubCategory(){
  if(this.subcategoryForm.invalid)
  {
    var obj={errors:{}} 
    Object.keys(this.subcategoryForm.controls).forEach((key) => {
      const controlErrors:ValidationErrors=this.subcategoryForm.get(key).errors
      if(controlErrors!=null)
      {
        Object.keys(controlErrors).forEach(errorMessage=>{
          var em=environment[errorMessage]
          var str=this.valPipe1.transform(em,controlErrors)
          obj.errors[key]=str
        })
      }
    });
    this.errorsObject=obj
  }
  else
  {
   // this.errorsObject={errors:{}}
    var catname=this.subcategoryForm.controls.categoryname.value
    var subcategoryname=this.subcategoryForm.controls.subcategoryname.value
    alert(catname)
    alert(subcategoryname)
    this.serAdmin1.subCategory().serPostSubCategory({cat_id:catname,sub_category_name:subcategoryname})
    .subscribe(
      dt=>{
        console.log(dt)
      }
    )
  }
}

}
