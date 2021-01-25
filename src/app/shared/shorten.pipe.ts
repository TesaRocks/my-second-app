import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(val: any, limit: number) {
    if (val.length > limit) {
      return val.substr(0, limit) + ' ...';
    }
    return val;
  }
}
