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
import { Store } from '@ngrx/store';
import * as TvReduxActions from '@store/tvshows/tvshow.actions';
import { selectAllTvShows } from '@store/tvshows/tvshow.selectors';
@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.scss',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
})
export class TvshowListComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  tvShows!: TVShow[];
  //destroy$: Subject<void> = new Subject<void>();
  service: TvshowService = inject(TvshowService);
  store: Store = inject(Store);

  // Redux
  tvShows$ = this.store.select(selectAllTvShows);

  ngOnInit(): void {
    // Redux
    this.store.dispatch(TvReduxActions.loadTvShows());
    this.tvShows$.subscribe((tvShows) => (this.tvShows = tvShows));

    // NgRx
    //this.loadTvShows();
  }

  loadTvShows() {
    const tvShowResponse = this.service.popularTvShows();
    if (tvShowResponse && tvShowResponse.results) {
      this.tvShows = tvShowResponse.results;
    } else {
      this.tvShows = [];
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    //this.destroy$.next();
    //this.destroy$.complete();
  }
}
