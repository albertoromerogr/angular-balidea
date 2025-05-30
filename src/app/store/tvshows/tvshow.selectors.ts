import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TvshowState } from './tvshow.state';

export const selectTvShowState =
  createFeatureSelector<TvshowState>('tvShowsStore');

export const selectAllTvShows = createSelector(
  selectTvShowState,
  (state: TvshowState) => state.tvshows,
);

export const selectLoading = createSelector(
  selectTvShowState,
  (state: TvshowState) => state.loading,
);

export const selectError = createSelector(
  selectTvShowState,
  (state) => state.error,
);

export const selectDetailed = createSelector(
  selectTvShowState,
  (state: TvshowState) => state.tvshow,
);
