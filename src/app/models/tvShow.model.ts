export interface TVShow {
  id: number;
  name: string;
  image: string;
  rating: number;
}

export interface TVShowDetails extends TVShow {
  cast: string[];
  trailer: string;
  reviews: string[];
  seasons: number;
  episodes: number;
  description: string;
  genre: string;
  releaseDate: string;
  status: string;
  network: string;
  runtime: number;
}
