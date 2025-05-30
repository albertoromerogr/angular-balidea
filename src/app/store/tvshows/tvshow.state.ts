import { TVShow } from '@models/tvshow.model';

export interface TvshowState {
  tvshows: TVShow[];
  loading: boolean;
  error: string;
  tvshow: TVShow | null;
}

export interface TvPreferedShowState {
  name: string;
  date: Date | null;
  vote: number;
}

export const initialTvShowState: TvshowState = {
  tvshows: [],
  loading: false,
  error: '',
  tvshow: null,
};

export const initialTvPreferedShowState: TvPreferedShowState = {
  name: '',
  date: null,
  vote: 0,
};
