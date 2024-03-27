import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTimeSoFar'
})
export class ElapsedTimeSoFarPipe implements PipeTransform {

  transform(dateString: string): string {
    const now = moment();
    const date = moment(dateString);
    const years = now.diff(date, 'years');
    date.add(years, 'years'); // Move up in years to get the correct month and day difference

    const months = now.diff(date, 'months');
    date.add(months, 'months'); // Adjust the date again to get the correct day difference

    const days = now.diff(date, 'days');

    return `${years} years ${months} months ${days} days`;
  }

}
