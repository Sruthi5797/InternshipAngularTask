import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, field: string): any[] {
    array.sort((var_a: any, var_b: any) => {
      if (var_a[field] < var_b[field]) {
        return -1;
      } else if (var_a[field] > var_b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
