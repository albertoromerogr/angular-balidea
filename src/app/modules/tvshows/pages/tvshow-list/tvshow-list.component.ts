import { Movie } from '@models/movie.model';
import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { TVShow, TvShowResponse } from '@models/tvshow.model';
import { MovieService } from '@services/movie.service';
import { TvshowService } from '@services/tvshow.service';
import { MediaCardComponent } from '@shared/media-card/media-card.component';
import { map, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.scss',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
})
export class TvshowListComponent implements OnInit, OnDestroy {
  suscription!: Subscription;
  tvshows!: TVShow[];
  //destroy$: Subject<void> = new Subject<void>();
  service: TvshowService = inject(TvshowService);

  ngOnInit(): void {
    this.loadTvShows();
  }

  loadTvShows() {
    this.suscription = this.service
      .getPopularTvShows()
      .pipe(
        map((tvshows: TvShowResponse) => tvshows.results),
        //takeUntil(this.destroy$),
      )
      .subscribe({
        next: (tvshows: TVShow[]) => {
          this.tvshows = tvshows;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
    //this.destroy$.next();
    //this.destroy$.complete();
  }
}
