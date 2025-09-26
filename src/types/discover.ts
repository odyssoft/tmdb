import { ResultsResponse } from './result'

export type DiscoverSort =
  | 'first_air_date.asc'
  | 'first_air_date.desc'
  | 'name.asc'
  | 'name.desc'
  | 'original_name.asc'
  | 'original_name.desc'
  | 'popularity.asc'
  | 'popularity.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc'

export type DiscoverOptions = {
  'air_date.gte': string
  'air_date.lte': string
  first_air_date_year: number
  'first_air_date.gte': string
  'first_air_date.lte': string
  /**
   * defaults to false
   */
  include_adult: boolean
  /**
   * defaults to false
   */
  include_null_first_air_dates: boolean
  /**
   * Defaults to en-US
   */
  language: string
  /**
   * Defaults to 1
   */
  page: number
  screened_theatrically: boolean
  /**
   * Defaults to popularity.desc
   */
  sort_by: DiscoverSort
  timezone: string
  'vote_average.gte': number
  'vote_average.lte': number
  'vote_count.gte': number
  'vote_count.lte': number
  /**
   * use in conjunction with with_watch_monetization_types or with_watch_providers
   */
  watch_region: string
  /**
   * can be a comma (AND) or pipe (OR) separated query
   */
  with_companies: string
  /**
   * can be a comma (AND) or pipe (OR) separated query
   */
  with_genres: string
  /**
   * can be a comma (AND) or pipe (OR) separated query
   */
  with_keywords: string
  with_networks: number
  with_origin_country: string
  with_original_language: string
  'with_runtime.gte': number
  'with_runtime.lte': number
  /**
   * possible values are: [0, 1, 2, 3, 4, 5], can be a comma (AND) or pipe (OR) separated query
   */
  with_status: string
  /**
   * possible values are: [flatrate, free, ads, rent, buy] use in conjunction with watch_region, can be a comma (AND) or pipe (OR) separated query
   */
  with_watch_monetization_types: string
  /**
   * use in conjunction with watch_region, can be a comma (AND) or pipe (OR) separated query
   */
  with_watch_providers: string
  without_companies: string
  without_genres: string
  without_keywords: string
  without_watch_providers: string
  /**
   * possible values are: [0, 1, 2, 3, 4, 5, 6], can be a comma (AND) or pipe (OR) separated query
   */
  with_type: string
}

export type DiscoverTVResponse = ResultsResponse<DiscoverShow>
export type DiscoverShow = {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}
