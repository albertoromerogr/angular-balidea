import { createReducer, on } from '@ngrx/store';
import { initialTvShowState } from './tvshow.state';
import * as TVShowsActions from './tvshow.actions'; // Importamos y ponemos el alias TVShowsActions para declarar los reducers

export const tvShowsReducer = createReducer(
  initialTvShowState,
  on(TVShowsActions.loadTvShows, (state) => ({
    ...state,
    tvshow: null,
    loading: true,
  })),
  on(TVShowsActions.loadTvShowsSuccess, (state, { tvshows }) => ({
    ...state,
    tvshows,
    tvshow: null,
    loading: false,
  })),
  on(TVShowsActions.loadTvShowsError, (state, { error }) => ({
    ...state,
    loading: false,
    tvshow: null,
    error,
  })),
  on(TVShowsActions.saveTvshowDetail, (state, { tvshow }) => ({
    ...state,
    tvshow,
  })),
  on(TVShowsActions.resetLoading, (state) => ({
    ...state,
    loading: false,
  })),
  on(TVShowsActions.saveAsFavourite, (state, { id }) => ({
    ...state,
    tvshows: state.tvshows.map((tvshow) =>
      tvshow.id === id ? { ...tvshow, isFavourite: true } : tvshow,
    ),
  })),
);

/*
Paso 1
- carga la aplicacion y asigna el estado inicial
{tvshows: [], loading: false, error: ''} estado 0
- lanzamos loadTvShows (action)
{tvshows: [], loading: true, error: ''} estado 1
- todo OK: lanzamos loadTvShowsSuccess
{tvshows: array de series recuperado de DB, loading: false, error: ''} estado 2
- KO: lanzamos loadTvShowsError
{tvshows: [], loading: false, error: string que pasemos} estado 2

tvshows: [],
loading: true,
error: ''
-> loading: true

  ...state,
  loadinga: true

  tvshows: [],
  loading: false,
  error: ''
  loadinga: true
*/
