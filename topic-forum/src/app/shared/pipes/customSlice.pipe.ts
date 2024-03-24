import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice',
})
export class CustomSlicePipe implements PipeTransform {
  transform(value: string, maxCharCount = 25): string {
    if (value.length > maxCharCount) {
      return `${value.substring(0, maxCharCount)}...`;
    }
    return value;
  }
}