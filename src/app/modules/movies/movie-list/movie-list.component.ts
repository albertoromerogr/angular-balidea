import { Component, OnInit } from '@angular/core';
import { Movie } from '@models/movie.model';
import { MovieService } from '@services/movie.service';
import { map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = []; // Para trabajar con observables en el component
  movies$: Observable<Movie[]> = of([]); // Para trabajar con async en el template

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
    this.movies$ = this.movieService
      .getPopularMovies()
      .pipe(map((movies) => movies.results));
  }

  loadMovies(): void {
    this.movieService
      .getPopularMovies()
      .pipe(
        map((movies) => movies.results),
        take(1),
      )
      .subscribe({
        next: (moviesArray: Movie[]) => {
          this.movies = moviesArray;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
