import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment"
import {ValidationPipePipe} from "../../core/pipes/validationpipe.pipe"
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from '../../core/models/error';
import { AdminService } from '../../core/services/admin.service';
import {ActivePipe} from "../../core/pipes/active.pipe"
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categorys:any=null;
  constructor(private serAdmin:AdminService, private fb:FormBuilder,private valPipe:ValidationPipePipe,private ap:ActivePipe) {
    this.getCategory()
    this.categoryForm=this.fb.group({
      categoryname:new FormControl("",[Validators.required,Validators.minLength(7)]),
  })
 }
 activeFormatter=(cellData)=>{
  return this.ap.transform(cellData.value)
}
 colData:any=[
  {headerName:"Category Name",field:"category_name", editable:true,onCellValueChanged:this.editCell.bind(this,"category_name"),sortable:true,filter:true},
  {headerName:"Status",field:"active", valueFormatter:this.activeFormatter,editable:true,onCellClicked:this.editCell.bind(this,"active"),sortable:true,filter:true,
  cellStyle:function(params){
    if(params.value==1)
    {
      return {color:"green"}
    }
    else
    {
      return {color:"red",backgroundColor:"silver"}
    }
    }
}]
errorsObject:ErrorModel={errors:{}}
public catdata:any;
  categoryForm:FormGroup
  editCell(colname,obj){
    var cname=colname
    var cdata=obj.data[colname]
    if (cname=="active")
    {
      if (cdata==0)
      cdata=1
      else
      cdata=0
    }
    // alert(cname)
    // alert(cdata)
    this.serAdmin.categoryServices()
.serUpdateCategory({id:obj.data["_id"],columnName:cname,columnData:cdata})
.subscribe(dt=>{
 console.log(dt)
 this.getCategory()
})

  }
  getCategory(){
    if(this.serAdmin.service_cat_data!=null)
    this.catdata=this.serAdmin.service_cat_data
    else
    {
      this.serAdmin.categoryServices().serGetCategory().subscribe(dt11=>{
        this.catdata=dt11;
       
      })
    }
    
  }
  insertCategory(){
  if(this.categoryForm.invalid)
  {
    alert("invalid")
    var obj={errors:{}} 
    Object.keys(this.categoryForm.controls).forEach((key) => {
      const controlErrors:ValidationErrors=this.categoryForm.get(key).errors
      if(controlErrors!=null)
      {
        Object.keys(controlErrors).forEach(errorMessage=>{
          var em=environment[errorMessage]
          var str=this.valPipe.transform(em,controlErrors)
          obj.errors[key]=str
        })
      }
    });
    this.errorsObject=obj
  }
  else
  {
   // this.errorsObject={errors:{}}
    var catname=this.categoryForm.controls.categoryname.value
    //alert(catname)
    this.serAdmin.categoryServices().serPostCategory({category_name:catname})
    .subscribe(
      dt=>{
       alert(dt)
      }
    )
  }
}
  ngOnInit(): void {
  }
}
