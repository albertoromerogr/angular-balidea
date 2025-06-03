import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TvshowListComponent } from './tvshow-list.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { initialTvShowState } from '../../../../store/tvshows/tvshow.state';

describe('TvShowListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TvshowListComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of([initialTvShowState]),
            dispatch: () => {
              initialTvShowState;
            },
          },
        },
      ],
    });
  });

  it('El componente se crea correctamente', () => {});
});
