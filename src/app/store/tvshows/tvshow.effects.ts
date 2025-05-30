import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TvshowService } from '@services/tvshow.service';
import * as TvShowsActions from './tvshow.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class TvShowEffects {
  constructor(
    private service: TvshowService,
    private actions$: Actions,
  ) {}

  loadTvShows$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TvShowsActions.loadTvShows),
      mergeMap(() =>
        this.service.getPopularTvShows().pipe(
          map((res) =>
            TvShowsActions.loadTvShowsSuccess({ tvshows: res.results }),
          ),
          catchError((err) =>
            of(TvShowsActions.loadTvShowsError({ error: err })),
          ),
        ),
      ),
    ),
  );
}
