export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  genre_ids: number[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean; // Opcional
  vote_average: number;
  vote_count: number;
}
