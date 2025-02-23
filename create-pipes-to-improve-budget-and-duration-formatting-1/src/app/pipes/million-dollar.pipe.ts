import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true,
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: String): String {
    if (value.includes('-')) {
      let [firstValueFrom, secondValueFrom] = value.split('-');
      return `$${firstValueFrom} to $${secondValueFrom} million`;
    }
    return `$${value} million`;
  }
}
