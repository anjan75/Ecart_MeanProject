import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment"
import {ValidationPipePipe} from "../../core/pipes/validationpipe.pipe"
import {FormBuilder,FormControl,FormGroup, ValidationErrors, Validators} from "@angular/forms"
import { ErrorModel } from '../../core/models/error';
import { AdminService } from '../../core/services/admin.service';
import {ActivePipe} from "../../core/pipes/active.pipe"

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  branform: FormGroup
  brand:any
  errorsObject:ErrorModel={errors:{}}
  constructor(private serAdmin:AdminService,private serAdmin1:AdminService, private fb1:FormBuilder,private valPipe1:ValidationPipePipe,private ap:ActivePipe ) 
  {
    
    this.branform=this.fb1.group({
      brand:new FormControl("",[Validators.required,Validators.minLength(7)])
   
 
  })
 
   }
  formbrandclick(){}
   
  
  ngOnInit(): void {
  }
  
}
