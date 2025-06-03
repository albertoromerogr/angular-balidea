import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Movie } from '@models/movie.model';
import { TVShow } from '@models/tvshow.model';
import { HelperService } from '../../services/helper.service';
import { RatingPipe } from '../../shared/pipes/rating.pipe';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingPipe, TruncatePipe],
})
export class MediaCardComponent implements OnInit {
  //@Input() item!: Movie | TVShow;
  //@Input() type: 'movie' | 'tvshow' = 'movie';

  readonly item = input<Movie | TVShow>();
  readonly type = input<'movie' | 'tvshow'>('movie');
  readonly selected = output<{}>();

  constructor(private helper: HelperService) {}

  ngOnInit(): void {}

  selectMovie() {
    this.selected.emit('estoy emitiendo');
  }

  get title(): string {
    const item = this.item();
    const type = this.type();
    if (!item) {
      return '';
    }
    return type === 'movie' && 'title' in item
      ? item.title
      : 'name' in item
        ? item.name
        : '';
  }

  get vote(): number {
    const item = this.item();
    return item ? item.vote_average : 0;
  }

  get poster(): Observable<string> {
    const item = this.item();
    return this.helper.getPosterUrl(item?.poster_path || '');
  }

  get id(): number {
    const item = this.item();
    return item ? item.id : 0;
  }

  get routeUrl(): string {
    const type = this.type();
    const id = this.id;
    return type === 'movie' ? `/movies/${this.id}` : `/tvshows/${this.id}`;
  }
}
