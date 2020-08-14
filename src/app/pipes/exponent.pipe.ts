import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExpoPipe implements PipeTransform {

  transform(value: any, exponent?: any): any {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}