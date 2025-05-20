import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.desa';
import { Movie, MovieResponse } from '@models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // Observables
  constructor(private http: HttpClient) {
    // Para que cargue con signals
    this.fetchPopularMovies();
  }

  getPopularMovies(language: string = 'es', page: number = 1): Observable<any> {
    const url = `${environment.apiUrl}/discover/movie?language=${language}&page=${page}&sort_by=popularity.desc`;
    return this.http.get(url);
  }

  getMoviesByString(query: string): Observable<any> {
    return of('');
  }

  getPosterUrl(path: string, size: string = 'w200'): Observable<string> {
    if (!path) {
      return of('https://picsum.photos/200/500');
    }

    //Simula petición
    return of(`${environment.imageApiUrl}${size}${path}`);
  }
  //-----------------------------------------------------------------------------------//
  //Signals
  private movies = signal<Movie[]>([]);
  private isLoading = signal<boolean>(false);
  private error = signal<string>('');

  private httpInject = inject(HttpClient);

  fetchPopularMovies(language: string = 'es', page: number = 1) {
    this.isLoading.set(true);

    this.httpInject
      .get<MovieResponse>(
        `${environment.apiUrl}/discover/movie?language=${language}&page=${page}&sort_by=popularity.desc`,
      )
      .subscribe({
        next: (moviesResponse: MovieResponse) => {
          this.isLoading.set(false);
          this.movies.set(moviesResponse.results);
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading.set(false);
          this.error.set(err.error.message);
        },
      });
  }
  getPopularMoviesSignal() {
    return {
      movies: this.movies, // Forma mas correcta
      loading: this.isLoading,
      error: this.error(),
    };
  }
  refreshPopularMovies() {
    this.fetchPopularMovies();
  }
}
