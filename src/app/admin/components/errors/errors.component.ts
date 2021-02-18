import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  formattedErrors:any=[]
  constructor(private titPipe:TitleCasePipe){

  }
  @Input() 
  set errData(var_errdata){
    console.log(var_errdata)
   this.formattedErrors=Object.keys(var_errdata.errors)
   .map(onekey=>{
    var key=this.titPipe.transform(onekey)
    return `${key} ${var_errdata.errors[onekey]}`})
  }
  ngOnInit(): void {
  }

}
