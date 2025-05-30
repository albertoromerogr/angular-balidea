import { TVShow } from '@models/tvshow.model';
import { createAction, props } from '@ngrx/store';

// Nombre de la acción: [Nombre Store] Accion a ejecutar
export const loadTvShows = createAction('[TV Shows] Load Tv Shows');

export const loadTvShowsSuccess = createAction(
  '[TV Shows] Load Tv Shows OK',
  props<{ tvshows: TVShow[] }>(),
);

export const loadTvShowsError = createAction(
  '[TV Shows] Load Tv Shows ERROR',
  props<{ error: string }>(),
);

export const saveTvshowDetail = createAction(
  '[TV Shows] Save TV Show',
  props<{ tvshow: TVShow }>(),
);
