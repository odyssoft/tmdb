import { Options, PageOptions } from '.'

import { FindPersonMovieKnownFor, FindPersonTVKnownFor } from './find'
import { ResultsResponse } from './result'

export type SearchNoLangOptions = {
  /**
   * Specify which page to query.
   * Minimum: 1
   * Maximum: 1000
   * default: 1
   */
  page?: number

  /**
   * Pass a text query to search. This value should be URI encoded.
   * minLength: 1
   */
  query: string
}

export type SearchOptions = PageOptions & {
  /**
   * Pass a text query to search. This value should be URI encoded.
   * minLength: 1
   */
  query: string
}

export type SearchMainOptions = PageOptions & {
  /**
   * Pass a text query to search. This value should be URI encoded.
   * minLength: 1
   */
  query: string

  /**
   * Specify a ISO 3166-1 code to filter release dates. Must be uppercase.
   * pattern: ^[A-Z]{2}$
   */
  region?: string

  /**
   * A filter and include or exclude adult movies.
   */
  include_adult?: boolean

  year?: number

  primary_release_year?: number
}

export type SearchCompanyResponse = ResultsResponse<SearchCompanyResult>

export interface SearchCompanyResult {
  id: number
  logo_path?: string | null
  name: string
}

export type SearchCollectionResponse = ResultsResponse<SearchCollectionResult>

export interface SearchCollectionResult {
  id: number
  backdrop_path: string
  name: string
  poster_path: string
}

export type SearchKeywordResponse = ResultsResponse<SearchKeywordResult>

export interface SearchKeywordResult {
  id: number
  name: string
}

export type SearchMovieResponse = ResultsResponse<SearchMovieResult>

export interface SearchMovieResult {
  poster_path?: string | null
  adult: boolean
  overview: string
  release_date: string
  genre_ids?: (number | null)[] | null
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path?: string | null
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type SearchPersonResponse = ResultsResponse<SearchPersonResult>

export interface SearchPersonResult {
  profile_path?: string | null
  adult: boolean
  id: number
  known_for?: FindPersonMovieKnownFor[] | FindPersonTVKnownFor[] | null
  name: string
  popularity: number
}

export type SearchTVResponse = ResultsResponse<SearchTVResult>

export interface SearchTVResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country?: string[] | null
  genre_ids?: number[] | null
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export type SearchMultiResponse = ResultsResponse<
  SearchMovieResult | SearchPersonResult | SearchTVResult
>
