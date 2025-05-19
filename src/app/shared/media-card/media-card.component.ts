import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Movie } from '@models/movie.model';
import { TVShow } from '@models/tvshow.model';
import { HelperService } from '@services/helper.service';
import { RatingPipe } from '@shared/pipes/rating.pipe';
import { TruncatePipe } from '@shared/pipes/truncate.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingPipe, TruncatePipe],
})
export class MediaCardComponent implements OnInit {
  @Input() item!: Movie | TVShow;
  @Input() type: 'movie' | 'tvshow' = 'movie';

  constructor(private helper: HelperService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.type === 'movie' && 'title' in this.item
      ? this.item.title
      : 'name' in this.item
        ? this.item.name
        : '';
  }

  get vote(): number {
    return this.item.vote_average;
  }

  get poster(): Observable<string> {
    return this.helper.getPosterUrl(this.item.poster_path);
  }

  get id(): number {
    return this.item.id;
  }

  get routeUrl(): string {
    return this.type === 'movie' ? `/movies/${this.id}` : `/tvshows/${this.id}`;
  }
}
