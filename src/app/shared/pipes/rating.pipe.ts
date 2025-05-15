import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rating', standalone: true })
export class RatingPipe implements PipeTransform {
  transform(vote: number): string {
    const stars = Math.round(vote / 2);
    return stars ? '⭐'.repeat(stars) : '✩';
  }
}
