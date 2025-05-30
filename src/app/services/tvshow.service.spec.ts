import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TvshowService } from './tvshow.service';
import { environment } from 'src/environments/environment.desa';
import { TvShowResponse } from '@models/tvshow.model';

describe('TvshowService', () => {
  let service: TvshowService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvshowService],
    });
    service = TestBed.inject(TvshowService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener y actualizar el signal de series populares', () => {
    const mockResponse: TvShowResponse = {
      page: 1,
      results: [],
      total_pages: 1,
      total_results: 0,
    };

    service.fetchPopularTvShows();
    const req = httpMock.expectOne(
      `${environment.apiUrl}/tv/popular?language=es&page=1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(service.popularTvShows()).toEqual(mockResponse);
  });

  it('debería obtener y actualizar el signal de una serie por id', () => {
    const mockTvShow = { id: 123, name: 'Serie de prueba' };

    service.fetchTvShowById('123');
    const req = httpMock.expectOne(
      `${environment.apiUrl}/tv/123?language=es`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTvShow);

    expect(service.tvShowById()).toEqual(mockTvShow);
  });
});