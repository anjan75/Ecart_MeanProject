import { Component, OnInit } from '@angular/core';
import {DbserviceService} from "../../core/services/dbservice.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categoryData:any=null;
  subCategoryData:any=null;
  subsubCategoryData:any=null;

  constructor(private serdbservice:DbserviceService) { }

  ngOnInit(): void {
    this.getCategory()
    this.getSubCategory() 
    this.getSubSubCategory()
  }
  getCategory(){
    this.serdbservice.categoryServices().serGetCategory()
    .subscribe(dt=>
      {
        this.categoryData=dt
      })
  }
  getSubCategory(){
    this.serdbservice.subCategory().serGetSubCategory().subscribe(dt=>{
      this.subCategoryData=dt
    })
  }
  getSubSubCategory(){
    this.serdbservice.subSubCategory().serGetSubSubCategory().subscribe(dt=>{
      this.subsubCategoryData=dt
    })
  }
}

