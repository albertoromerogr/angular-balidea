import { Movie } from './../../models/movie.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieReactiveComponent } from './add-movie-reactive/add-movie-reactive.component';

const routes: Routes = [
  { path: '', component: MovieListComponent }, //Forma tradicional de cargar un componente
  { path: 'add', component: AddMovieReactiveComponent },
  {
    path: ':id',
    loadComponent: () =>
      import('./movie-detail/movie-detail.component').then(
        (m) => m.MovieDetailComponent,
      ),
  }, // Forma lazy loading de cargar un componente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
