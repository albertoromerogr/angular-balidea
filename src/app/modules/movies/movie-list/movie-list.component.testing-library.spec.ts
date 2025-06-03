import { render, screen, fireEvent } from '@testing-library/angular';
import { MovieListComponent } from './movie-list.component';
import { MovieService } from '../../../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

const mockMovie = {
  id: 1,
  title: 'Gladiator II',
  poster_path: 'gladiator.jpg',
  vote_average: 8,
};

describe('MovieListComponent (Testing Library)', () => {
  it('El componente se crea correctamente', async () => {
    await render(MovieListComponent, {
      imports: [HttpClientTestingModule],
      providers: [
        MovieService,
        {
          provide: MovieService,
          useValue: {
            getPopularMoviesSignal: () => ({
              movies: () => [mockMovie],
              loading: () => false,
              error: () => '',
            }),
            getPopularMovies: () => of({ results: [mockMovie] }),
            setMoviesMock: () => {},
          },
        },
      ],
    });
    expect(screen.getByText(/películas/i)).toBeInTheDocument();
  });

  it('Al llamar a change loading setea un numero', async () => {
    const { fixture } = await render(MovieListComponent, {
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    const button = screen.getByRole('button', { name: /force change/i });
    fireEvent.click(button);
    // Verifica el cambio de la signal en el componente
    expect(fixture.componentInstance.numero()).toBe(24);
  });

  it('Al clicar sobre una card llama a onMovieSelected', async () => {
    await render(MovieListComponent, {
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MovieService,
          useValue: {
            getPopularMoviesSignal: () => ({
              movies: () => [mockMovie],
              loading: () => false,
              error: () => '',
            }),
            getPopularMovies: () => of({ results: [mockMovie] }),
            setMoviesMock: () => {},
          },
        },
      ],
    });
    // Busca la card por el título
    const cardTitle = screen.getByText(/gladiator ii/i);
    expect(cardTitle).toBeInTheDocument();
    const cardDiv = cardTitle.closest('.media-card');
    expect(cardDiv).not.toBeNull();
    if (cardDiv) {
      fireEvent.click(cardDiv);
    }
    // Aquí podrías comprobar efectos secundarios si los hubiera
  });
});
