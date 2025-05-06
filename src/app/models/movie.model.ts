export interface Movie {
  id: number | string;
  title: string;
  year: number;
  director: string;
  rating: number;
  genre?: string;
  description: string;
}

export interface MovieDetails extends Movie {
  cast: string[];
  trailer: string;
  reviews: string[];
}

export interface MovieList {
  movies: Movie[];
  total: number;
  page: number;
  totalPages: number;
}
