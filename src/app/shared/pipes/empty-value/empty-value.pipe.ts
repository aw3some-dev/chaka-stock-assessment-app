import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue'
})
export class EmptyValuePipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'undefined') {
      return '-';
    }

    if(!value){
      return '-';
    }

    return value;
  }

}
