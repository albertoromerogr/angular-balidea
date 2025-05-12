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
    return this.http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apiKey}`,
      },
    });
  }

  getMoviesByString(query: string): Observable<any> {
    return of('');
  }
}
