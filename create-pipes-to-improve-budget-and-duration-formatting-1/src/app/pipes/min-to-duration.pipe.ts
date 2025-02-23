import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToDuration',
  standalone: true,
})
export class MinToDurationPipe implements PipeTransform {
  transform(value: string): String {
    let hours = Math.floor(parseInt(value) / 60);
    let mins = parseInt(value) % 60;
    return `${hours}h ${mins}min`;
  }
}
