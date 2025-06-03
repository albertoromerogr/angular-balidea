import { MoviesFacade } from './../../../patterns/movies.facade';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Movie, MovieResponse } from '@models/movie.model';
import { MovieService } from '../../../services/movie.service';
import { MediaCardComponent } from '../../../shared/media-card/media-card.component';
import { map, Observable, of, take } from 'rxjs';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MediaCardComponent, ScrollingModule],
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
  moviesInject = this.movieService.getPopularMoviesSignal().movies;
  loading = signal<boolean>(false);
  error: string = '';
  numero = signal(0);
  doble = computed(() => this.numero() * 2);

  constructor(private movieService: MovieService) {
    // Elimina la reasignación de signals y efectos innecesarios para testabilidad
    // this.moviesInject = ...
    // this.loading = ...
    // this.error = ...
    // Mantén solo la inicialización directa
  }

  onMovieSelected(movie: any) {
    console.log(movie);
  }

  changeLoading() {
    this.numero.set(24);
  }

  trackById(index: number, movie: Movie): number {
    return movie.id;
  }
}
