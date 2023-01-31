import { Options } from './'

export type FindOptions = Options & {
  /**
   * Allowed Values:
   * imdb_id, freebase_mid, freebase_id,
   * tvdb_id, tvrage_id,
   * facebook_id, twitter_id, instagram_id
   */
  external_source: string
}

export interface FindByIdResponse {
  movie_results?: FindMovieResult[] | null
  person_results?: FindPersonResult[] | null
  tv_results?: FindTvResult[] | null
  tv_episode_results?: FindTvEpisodeResult[] | null
  tv_season_results?: FindTvSeasonResult[] | null
}

export interface FindMovieResult {
  adult: boolean
  backdrop_path?: null
  genre_ids?: number[] | null
  id: number
  original_language: string
  original_title: string
  overview: string
  release_date: string
  poster_path?: null
  popularity: number
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface FindPersonResult {
  profile_path: string | null
  adult: boolean
  id: number
  known_for: FindPersonMovieKnownFor | FindPersonTVKnownFor
  name: string
  popularity: number
}

export interface FindPersonMovieKnownFor {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date: string
  original_title: string
  genre_ids: number[]
  id: number
  media_type: 'movie'
  original_language: string
  title: string
  backdrop_path: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface FindPersonTVKnownFor {
  poster_path: string | null
  popularity: number
  id: number
  overview: string
  backdrop_path: string | null
  vote_average: number
  media_type: 'tv'
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export interface FindTvResult {
  poster_path: string | null
  popularity: number
  id: number
  backdrop_path: string | null
  vote_average: number
  overview: string
  first_air_date: string
  origin_country: string[]
  genre_ids: number[]
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export type FindTvEpisodeResult = any
export type FindTvSeasonResult = any
// export interface FindTvEpisodeResult {}
// export interface FindTvSeasonResult {}
