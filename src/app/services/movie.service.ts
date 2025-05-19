import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.desa';
import { MovieResponse } from '@models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

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
}
