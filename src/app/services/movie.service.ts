import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.desa';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(
    language: string = 'en-US',
    page: number = 1,
  ): Observable<any> {
    const url = `${environment.apiUrl}/discover/tv?language=${language}&page=${page}&sort_by=popularity.desc`;
    return this.http.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apiKey}`,
      },
    });
  }
}
