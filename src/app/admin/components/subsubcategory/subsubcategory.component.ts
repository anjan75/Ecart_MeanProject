
import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment"
import {ValidationPipePipe} from "../../core/pipes/validationpipe.pipe"
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from '../../core/models/error';
import { AdminService } from '../../core/services/admin.service';
import {ActivePipe} from "../../core/pipes/active.pipe"
@Component({
  selector: 'app-subsubcategory',
  templateUrl: './subsubcategory.component.html',
  styleUrls: ['./subsubcategory.component.scss']
})
export class SubsubcategoryComponent  {
  subsubcategoryForm:FormGroup
  subsubcategorys:any=null;
  subcategorys:any=null;
  constructor(private serAdmin1:AdminService, private fb1:FormBuilder,private valPipe1:ValidationPipePipe,private ap:ActivePipe ) {
    this.subgetCategory()
    this.subsubgetCategory()
    this.subsubcategoryForm=this.fb1.group({
      subsubcategoryname:new FormControl("",[Validators.required,Validators.minLength(7)]),
      subcategoryname:new FormControl("",[Validators.required,Validators.minLength(7)])
 
  })
 }
 activeFormatter=(cellData)=>{
  return this.ap.transform(cellData.value)
}
  colData:any=[
    {headerName:"sub category",field:"data_subcat.sub_category_name",sortable:true},
    {headerName:"sub sub category name",field:"sub_sub_category_name", editable:true,onCellValueChanged:this.editCell.bind(this,"sub_sub_category_name"),sortable:true,filter:true}]
  editCell(colname,obj){
    var cname=colname
    var cdata=obj.data[colname]
    // alert(cname)
    // alert(cdata)
    this.serAdmin1.subSubCategory()
.serUpdatesubsubCategory({id:obj.data["_id"],columnName:cname,columnData:cdata})
.subscribe(dt=>{
 console.log(dt)
 
this.subgetCategory()
this.subsubgetCategory()
})

  }
  selectedValue:any;
  selectedValue1:any;

errorsObject:ErrorModel={errors:{}}

  
 
  subgetCategory()
  {
    this.serAdmin1.subCategory().serGetSubCategory().subscribe(dt1=>{
      this.subcategorys=dt1;
      })
  }
  subsubgetCategory()
  {
    if(this.serAdmin1.service_subsubcat_data!=null)
    this.subsubcategorys=this.serAdmin1.service_subsubcat_data
    else
    {
      this.serAdmin1.subSubCategory().serGetSubSubCategory().subscribe(dt2=>{
        this.subsubcategorys=dt2;
        })
      }
    }
   

  insertsubSubCategory(){
  if(this.subsubcategoryForm.invalid)
  {
    var obj={errors:{}} 
    Object.keys(this.subsubcategoryForm.controls).forEach((key) => {
      const controlErrors:ValidationErrors=this.subsubcategoryForm.get(key).errors
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
    
    var subcatid=this.subsubcategoryForm.controls.subcategoryname.value
    var subsubcategoryname=this.subsubcategoryForm.controls.subsubcategoryname.value
    
    alert(subcatid)
    alert(subsubcategoryname)
    this.serAdmin1.subSubCategory().serPostSubSubCategory({subcat_id:subcatid,sub_sub_category_name:subsubcategoryname,})
    .subscribe(
      dt=>{
        console.log(dt)
      }
    )
  }
}

}
