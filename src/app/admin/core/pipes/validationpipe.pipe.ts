import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationpipe'
})
export class ValidationPipePipe implements PipeTransform {
  transform(msg:string,eobj:any): unknown {
    if(eobj.minlength)
    msg+=eobj.minlength.requiredLength+" characters"
    return msg;
  }

}
