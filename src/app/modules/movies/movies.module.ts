import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
