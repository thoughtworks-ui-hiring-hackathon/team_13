import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result = 0;
    result = Math.round(value / 2);
    return result;
  }
}
