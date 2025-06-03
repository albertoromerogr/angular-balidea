import { render, screen, fireEvent } from '@testing-library/angular';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../../../services/movie.service';
import { MediaCardComponent } from '../../../shared/media-card/media-card.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { signal } from '@angular/core';
import { jest } from '@jest/globals';

describe('MovieListComponent (Testing Library)', () => {
  const mockMovie = {
    id: 1,
    title: 'Gladiator II',
    poster_path: 'gladiator.jpg',
    vote_average: 8,
  };

  let movieSignal = signal([mockMovie]);
  let loadingSignal = signal(false);

  const mockMovieService = {
    getPopularMoviesSignal: () => ({
      movies: movieSignal,
      loading: loadingSignal,
      error: () => '',
    }),
  };

  it('debe renderizar el título "Películas"', async () => {
    await render(MovieListComponent, {
      componentProviders: [
        { provide: MovieService, useValue: mockMovieService },
      ],
      imports: [MediaCardComponent, ScrollingModule],
    });

    expect(screen.getByText(/películas/i)).toBeInTheDocument();
  });

  it('debe mostrar una tarjeta con el título Gladiator II', async () => {
    await render(MovieListComponent, {
      componentProviders: [
        { provide: MovieService, useValue: mockMovieService },
      ],
      imports: [MediaCardComponent, ScrollingModule],
    });

    expect(screen.getByText(/gladiator ii/i)).toBeInTheDocument();
  });

  it('debe cambiar el valor de "numero" al hacer clic en el botón', async () => {
    const { fixture } = await render(MovieListComponent, {
      componentProviders: [
        { provide: MovieService, useValue: mockMovieService },
      ],
      imports: [MediaCardComponent, ScrollingModule],
    });

    const button = screen.getByRole('button', { name: /force change/i });
    fireEvent.click(button);
    expect(fixture.componentInstance.numero()).toBe(24);
  });

  it('debe llamar a onMovieSelected cuando se emite el evento "selected"', async () => {
    const { fixture } = await render(MovieListComponent, {
      componentProviders: [
        { provide: MovieService, useValue: mockMovieService },
      ],
      imports: [MediaCardComponent, ScrollingModule],
    });

    const component = fixture.componentInstance;
    const spy = jest.spyOn(component, 'onMovieSelected');
    fixture.detectChanges();

    const mediaCard = fixture.debugElement.query(
      (el) => el.name === 'app-media-card',
    );
    mediaCard.triggerEventHandler('selected', mockMovie);
    expect(spy).toHaveBeenCalledWith(mockMovie);
  });
});
