import { Injectable } from '@angular/core';
import { Movie } from '@models/movie.model';
import { MovieService } from '@services/movie.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacade {
  constructor(private service: MovieService) {}

  getPopularMovies(): any {
    return this.service.getPopularMovies();
  }

  getMoviesByString(query: string, order = 'ASC'): any {
    return this.service.getMoviesByString(query).subscribe((result) => result);
  }
  /*
  Paginamos en tiempo de ejecucion (patron strategy)
  getPaginatedMovies()
  */
}
