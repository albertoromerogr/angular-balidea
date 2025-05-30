import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TvShowResponse } from '@models/tvshow.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.desa';
import { signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  http: HttpClient = inject(HttpClient);

  private _popularTvShows = signal<TvShowResponse | null>(null);
  private _tvShowById = signal<any | null>(null);

  get popularTvShows() {
    return this._popularTvShows.asReadonly();
  }

  get tvShowById() {
    return this._tvShowById.asReadonly();
  }

  fetchPopularTvShows(language: string = 'es', page: number = 1): void {
    const url = `${environment.apiUrl}/tv/popular?language=${language}&page=${page}`;
    this.http.get<TvShowResponse>(url).subscribe((data) => {
      this._popularTvShows.set(data);
    });
  }

  fetchTvShowById(id: string, language: string = 'es'): void {
    const url = `${environment.apiUrl}/tv/${id}?language=${language}`;
    this.http.get<any>(url).subscribe((data) => {
      this._tvShowById.set(data);
    });
  }

  getTvShowById(id: string): Observable<any> {
    const url = `${environment.apiUrl}/tv/${id}?language=es`;
    return this.http.get<any>(url);
  }

  getPopularTvShows(): Observable<TvShowResponse> {
    const url = `${environment.apiUrl}/tv/popular?language=es&page=1`;
    return this.http.get<TvShowResponse>(url);
  }
}
