import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resize'
})
export class SizePipe implements PipeTransform {

   transform(talla: any, ...args:any[]): any {
    if (talla > 0 && talla < 21) return "XS";
    if (talla > 20 && talla < 31) return "S";
    if (talla > 30 && talla < 51) return "M";
    if (talla > 50 && talla < 71) return "L";
    if (talla > 70 && talla < 101) return "XL";
  }
}