import { MoviesFacade } from './../../../patterns/movies.facade';
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Movie, MovieResponse } from '@models/movie.model';
import { MovieService } from '@services/movie.service';
import { MediaCardComponent } from '@shared/media-card/media-card.component';
import { map, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: true,
  imports: [CommonModule, MediaCardComponent],
})
export class MovieListComponent {
  /*
    Enfoque Rxjs con observables

  movies: Movie[] = []; // Para trabajar con observables en el component
  movies$: Observable<Movie[]> = of([]); // Para trabajar con async en el template

  constructor(
    private movieService: MovieService,
    private moviesFacade: MoviesFacade,
  ) {}

  ngOnInit(): void {
    this.loadMovies();
    this.movies$ = this.movieService
      .getPopularMovies()
      .pipe(map((movies) => movies.results));
  }

  loadMovies(): void {
    // this.moviesFacade.getPopularMovies().subscribe((movies) => movies.results)

    this.movieService
      .getPopularMovies()
      .pipe(
        map((movies: MovieResponse) => movies.results),
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
*/
  /*
    Enfoque con signals
  */
  movieServiceInject = inject(MovieService);
  moviesInject = signal<Movie[]>([]);
  loading = signal<boolean>(false);
  error: string = '';
  numero = signal(0);
  doble = computed(() => this.numero() * 2);

  constructor(private movieService: MovieService) {
    // Obtener signals una sola vez y reutilizarlas
    const movieSignals = this.movieService.getPopularMoviesSignal();

    // Desestructurado
    // const { movies } = this.movieService.getPopularMoviesSignal();

    // this.movieService.refreshPopularMovies();
    // this.moviesInject = movieSignals.movies;
    // this.loading = movieSignals.loading;
    // this.error = movieSignals.error;

    // Observable + signals (no recomendable)
    const observableSignal = signal<Movie[]>([]);
    this.movieService.getPopularMovies().subscribe({
      next: (movies) => {
        observableSignal.set(movies);
      },
    });

    effect(() => {
      console.log('effect de numero');
      console.log('Esta es mi signal', this.numero());

      const { movies, loading, error } =
        this.movieService.getPopularMoviesSignal();

      this.moviesInject = movies;
      this.loading = loading;
      this.error = error;
      /*
      const movieSignals = this.movieService.getPopularMoviesSignal();
      this.moviesInject = movieSignals.movies;
      this.loading = movieSignals.loading;
      this.error = movieSignals.error;
      */
    });
    effect(() => {
      console.log('effect de doble');
      console.log('Doble', this.doble());
    });

    // Código basado en observables (comentado porque ya no se utiliza)
    /*
    this.movieService.getPopularMovies().subscribe((movies: MovieResponse) => {
      this.moviesSignal.set(movies.results);
    });
    */
  }

  onMovieSelected(movie: any) {
    console.log(movie);
  }

  changeLoading() {
    this.numero.set(24);
  }
}
