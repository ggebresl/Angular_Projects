import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  // transform(value: number): number {
  //   return value * value;
  // }

  transform(value:number , multiplier:number):number{
    return (value*multiplier);
  }
}
