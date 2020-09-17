import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rename'
})
export class NamePipe implements PipeTransform {

   transform(inicial: any, ...args:any[]): any {
    if (inicial == "P"  || inicial == "p") return "primary";
    if (inicial == "S" || inicial == "s") return "secondary";

  }
}