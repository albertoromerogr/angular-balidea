import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { environment } from '../../environments/environment.desa';
import { MovieResponse } from '@models/movie.model';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener películas populares', () => {
    const mockResponse: MovieResponse = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    };

    service.getPopularMovies().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/discover/movie?language=es&page=1&sort_by=popularity.desc`,
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('debería devolver una url de póster válida', (done) => {
    service.getPosterUrl('/poster.jpg').subscribe((url) => {
      expect(url).toContain('/poster.jpg');
      done();
    });
  });

  it('debería devolver una imagen por defecto si no hay path', (done) => {
    service.getPosterUrl('').subscribe((url) => {
      expect(url).toBe('https://picsum.photos/200/500');
      done();
    });
  });
});
