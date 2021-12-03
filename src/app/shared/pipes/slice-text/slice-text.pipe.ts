import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (typeof value === 'undefined' || !value) {
      return '';
    }

    if (typeof value !== 'string') {
      return value;
    }

    let slicedText = new SlicePipe().transform(value, args[0], args[1]);

    if (value.length > args[1]) {
      slicedText = `${slicedText}...`;
    }

    return slicedText;
  }

}
