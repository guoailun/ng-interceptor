import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, exponent < 10 ? 1 : exponent);
  }

}
