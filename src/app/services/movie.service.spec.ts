import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MovieService } from './movie.service';
import { Movie, MovieResponse } from '@models/movie.model';
import { environment } from '../../environments/environment.desa';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;
  let apiUrl = `${environment.apiUrl}/discover/movie?language=es&page=1&sort_by=popularity.desc`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);

    // Reiniciar el mock
    httpMock.expectOne(apiUrl).flush({
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    } as MovieResponse);
  });

  it('El servicio se crea correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getPosterUrl debe devolver una url válida cuando no reciba path', (done) => {
    const defaultImgPath = 'https://picsum.photos/200/500';
    service.getPosterUrl('').subscribe((url) => {
      expect(url).toBe(defaultImgPath);
      done();
    });
  });

  it('getPosterUrl debe devolver una url válida cuando reciba path', (done) => {
    const defaultImgPath = 'https://picsum.photos/200/500';
    service.getPosterUrl('urlPoster').subscribe((url) => {
      expect('https://image.tmdb.org/t/p/w200urlPoster').toBe(url);
      done();
    });
  });

  it('getPopularMovies crea una url válida', () => {
    const mockGetPopularMoviesResponse: MovieResponse = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    };
    service.getPopularMovies().subscribe((response: MovieResponse) => {
      expect(response).toEqual(mockGetPopularMoviesResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/discover/movie?language=es&page=1&sort_by=popularity.desc`,
    );
    req.flush(mockGetPopularMoviesResponse);
  });

  it('getPopularMovies ejecuta un GET', () => {
    const mockGetPopularMoviesResponse: MovieResponse = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    };
    service.getPopularMovies().subscribe((response: MovieResponse) => {
      expect(response).toEqual(mockGetPopularMoviesResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/discover/movie?language=es&page=1&sort_by=popularity.desc`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockGetPopularMoviesResponse);
  });
});
