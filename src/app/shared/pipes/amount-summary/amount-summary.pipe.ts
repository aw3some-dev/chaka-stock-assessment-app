import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountSummary'
})
export class AmountSummaryPipe implements PipeTransform {

  transform(value: number | any, args: number): string | number | null {
    const suffixes = ['K', 'M', 'B', 'T', 'P', 'E'];

    if (!value) {
      return null;
    }

    if (Number.isNaN(value)) {
      return null;
    }

    if (value < 1000) {
      return value;
    }

    const exp = Math.floor(Math.log(value) / Math.log(1000));

    const returnValue = (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];

    return returnValue;
  }

}
