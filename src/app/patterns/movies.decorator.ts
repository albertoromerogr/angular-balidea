import { Injectable } from '@angular/core';
import { MovieService } from '@services/movie.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingMoviesService extends MovieService {
  override getPopularMovies(language?: string, page?: number): Observable<any> {
    console.log('Logging before calling getPopularMovies');
    return of('Logger de popular services');
  }
}
