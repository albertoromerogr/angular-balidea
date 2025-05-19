import { Routes } from '@angular/router';
import { LifecyclePageComponent } from '@shared/lifecycle-page/lifecycle-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/movies/movie-list/movie-list.component').then(
            (c) => c.MovieListComponent,
          ),
      },
      {
        path: 'add',
        loadComponent: () =>
          import(
            './modules/movies/add-movie-reactive/add-movie-reactive.component'
          ).then((c) => c.AddMovieReactiveComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./modules/movies/movie-detail/movie-detail.component').then(
            (c) => c.MovieDetailComponent,
          ),
      },
    ],
  },
  {
    path: 'tvshows',
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './modules/tvshows/pages/tvshow-list/tvshow-list.component'
          ).then((c) => c.TvshowListComponent),
      },
      {
        path: 'add',
        loadComponent: () =>
          import(
            './modules/tvshows/add-tvshow-template/add-tvshow-template.component'
          ).then((c) => c.AddTvshowTemplateComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './modules/tvshows/pages/tvshow-detail/tvshow-detail.component'
          ).then((c) => c.TvshowDetailComponent),
      },
    ],
  },
  {
    path: 'life',
    loadComponent: () =>
      import('./shared/lifecycle-page/lifecycle-page.component').then(
        (c) => c.LifecyclePageComponent,
      ),
  },
];
