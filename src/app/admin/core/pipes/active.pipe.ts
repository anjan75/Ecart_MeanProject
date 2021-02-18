import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==0)
    return "Inactive"
    else
    return "Active"
  }

}
