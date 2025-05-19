import { Injectable } from '@angular/core';
import { Movie } from '@models/movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesObserver {
  private moviesSubject = new BehaviorSubject<Movie[]>([]);
  movies$ = this.moviesSubject.asObservable();

  updateMovies(movies: Movie[]) {
    this.moviesSubject.next(movies);
  }
}
