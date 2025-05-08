import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TVShow, TvShowResponse } from '@models/tvshow.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.desa';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  constructor(private http: HttpClient) {}

  getPopularTvShows(
    language: string = 'es',
    page: number = 1,
  ): Observable<TvShowResponse> {
    const url = `${environment.apiUrl}/tv/popular?language=${language}&page=${page}`;
    return this.http.get<TvShowResponse>(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apiKey}`,
      },
    });
  }

  getTvShowById(id: string, language: string = 'es'): Observable<any> {
    const url = `${environment.apiUrl}/tv/${id}?language=${language}`;
    return this.http.get<any>(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.apiKey}`,
      },
    });
  }
}
