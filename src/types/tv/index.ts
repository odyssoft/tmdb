import { ResultsResponse } from '../result'
export * from './episodes'
export * from './seasons'

export interface TVDetails {
  adult?: boolean
  backdrop_path: string
  created_by?: TVCreator[] | null
  episode_run_time?: number[] | null
  first_air_date: string
  genres?: TVGenre[] | null
  homepage: string
  id: number
  in_production: boolean
  languages?: string[] | null
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air?: null
  networks?: TVNetwork[] | null
  number_of_episodes: number
  number_of_seasons: number
  origin_country?: string[] | null
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: ProductionCompany[] | null
  production_countries?: ProductionCountry[] | null
  seasons?: Season[] | null
  spoken_languages?: TVSpokenLanguage[] | null
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
  //  Append to response
  account_states?: any
  aggregate_credits?: TVAggregateCredits
  alternative_titles?: TVAlternativeTitles
  changes?: TVChanges
  content_ratings?: TVContentRatingResult
  credits?: TVCredits
  episode_groups?: TVEpisodeGroupResult
  external_ids?: TVExternalIds
  images?: TVImages
  keywords?: TVKeywords
  recommendations?: TVRecommendationsResponse
  reviews?: TVReviewsResponse
  screened_theatrically?: TVScreenedTheatrically
  similar?: TVSimilarTVResponse
  translations?: TVTranslations
  videos?: TVVideosResponse
  'watch/providers'?: TVWatchProviders
}

export interface TVCreator {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface TVGenre {
  id: number
  name: string
}

export interface LastEpisodeToAir {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface TVNetwork {
  name: string
  id: number
  logo_path: string
  origin_country: string
}

export interface ProductionCompany {
  name: string
  id: number
  logo_path?: string | null
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface Season {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export interface TVSpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface TVAggregateCredits {
  cast?: TVCast[] | null
  crew?: TVCrew[] | null
  id: number
}

export interface TVCast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string | null
  roles?: Role[] | null
  total_episode_count: number
  order: number
}

export interface Role {
  credit_id: string
  character: string
  episode_count: number
}

export interface TVCrew {
  adult: boolean
  department: string
  gender: number
  id: number
  jobs?: Job[] | null
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string | null
  total_episode_count: number
}

export interface Job {
  credit_id: string
  job: string
  episode_count: number
}

export interface TVAlternativeTitles {
  id: number
  results?: AlternativeTitleResult[] | null
}

export interface AlternativeTitleResult {
  title: string
  iso_3166_1: string
}

export interface TVChanges {
  changes?: TVChange[] | null
}
export interface TVChange {
  key: string
  items?: TVChangeItem[] | null
}
export interface TVChangeItem {
  id: string
  action: string
  time: string
  value: TVValue | null | string
  iso_639_1?: string | null
  original_value?: TVOriginalValue | null | string
}
export interface TVValue {
  add_to_every_season?: boolean | null
  credit_id?: string | null
  department?: string | null
  job?: string | null
  person_id?: number | null
  season_id?: number | null
  character?: string | null
  order?: number | null
  id?: number | null
  name?: string | null
  season_number?: number | null
  poster?: TVPoster | null
}

export interface TVPoster {
  file_path: string
  iso_639_1?: string | null
}

export interface TVOriginalValue {
  credit_id?: string | null
  department?: string | null
  job?: string | null
  person_id?: number | null
  season_id?: number | null
  poster?: TVPoster | null
  id?: number | null
  name?: string | null
}

export interface TVContentRatings {
  results?: TVContentRatingResult[] | null
  id: number
}

export interface TVContentRatingResult {
  iso_3166_1: string
  rating: string
}

export interface TVCredits {
  cast?: TVCreditCast[] | null
  crew?: TVCreditCrew[] | null
  id: number
}

export interface TVCreditCast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  character: string
  credit_id: string
  order: number
}

export interface TVCreditCrew {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string | null
  credit_id: string
  department: string
  job: string
}

export interface TVEpisodeGroups {
  results?: TVEpisodeGroupResult[] | null
  id: number
}

export interface TVEpisodeGroupResult {
  description: string
  episode_count: number
  group_count: number
  id: string
  name: string
  network?: TVNetwork | null
  type: number
}

export interface TVExternalIds {
  imdb_id?: string
  freebase_mid?: string
  freebase_id?: string
  tvdb_id?: number
  tvrage_id?: number
  facebook_id?: string
  instagram_id?: string
  twitter_id?: string
  id: number
}

export interface TVImages {
  backdrops?: TVImage[] | null
  id: number
  posters?: TVImage[] | null
}

export interface TVImage {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1?: string | null
  vote_average: number
  vote_count: number
  width: number
}

export interface TVKeywords {
  id: number
  results?: TVKeywordResult[] | null
}

export interface TVKeywordResult {
  id: number
  name: string
}

export type TVRecommendationsResponse = ResultsResponse<RecommendationResult>

export interface RecommendationResult {
  backdrop_path: string
  first_air_date: string
  genre_ids?: number[] | null
  id: number
  original_language: string
  original_name: string
  overview: string
  origin_country?: string[] | null
  poster_path: string
  popularity: number
  name: string
  vote_average: number
  vote_count: number
}

export type TVReviewsResponse = ResultsResponse<TVReviewsResult>

export interface TVReviewsResult {
  author: string
  author_details: AuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface AuthorDetails {
  name: string
  username: string
  avatar_path?: string | null
  rating: number
}

export interface TVScreenedTheatrically {
  id: number
  results?: TVScreenedTheatricallyResult[] | null
}

export interface TVScreenedTheatricallyResult {
  id: number
  episode_number: number
  season_number: number
}

export type TVSimilarTVResponse = ResultsResponse<TVSimilarTVResult>

export interface TVSimilarTVResult {
  backdrop_path: string
  first_air_date: string
  genre_ids?: number[] | null
  id: number
  original_language: string
  original_name: string
  overview: string
  origin_country?: string[] | null
  poster_path: string
  popularity: number
  name: string
  vote_average: number
  vote_count: number
}

export interface TVTranslations {
  id: number
  translations?: TVTranslation[] | null
}

export interface TVTranslation {
  iso_3166_1: string
  iso_639_1: string
  name: string
  english_name: string
  data: TVTranslationData
}

export interface TVTranslationData {
  name: string
  overview: string
  homepage: string
}

export type TVVideosResponse = ResultsResponse<TVVideosResult>

export interface TVVideosResult {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

export interface TVWatchProviders {
  results: TVWatchProviderResult
}

export type TVWatchProviderResult = {
  [key in
    | 'AR'
    | 'AT'
    | 'AU'
    | 'BE'
    | 'BR'
    | 'CA'
    | 'CH'
    | 'CL'
    | 'CO'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'EC'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'HU'
    | 'IE'
    | 'IN'
    | 'IT'
    | 'JP'
    | 'MX'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PE'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'RU'
    | 'SE'
    | 'TR'
    | 'US'
    | 'VE'
    | 'ZA']: TVWatchProvider
}

export interface TVWatchProvider {
  link: string
  ads?: TVProvider[] | null
  rent?: TVProvider[] | null
  flatrate?: TVProvider[] | null
  buy?: TVProvider[] | null
}

export interface TVProvider {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
}

export interface TVLatest {
  backdrop_path?: null
  created_by?: null[] | null
  episode_run_time?: number[] | null
  first_air_date: string
  genres?: TVGenre[] | null
  homepage: string
  id: number
  in_production: boolean
  languages?: string[] | null
  last_air_date: string
  name: string
  networks?: TVNetworkAlternative[] | null
  number_of_episodes: number
  number_of_seasons: number
  origin_country?: string[] | null
  original_language: string
  original_name: string
  overview?: null
  popularity: number
  poster_path?: null
  production_companies?: null[] | null
  seasons?: TVSeason[] | null
  status: string
  type: string
  vote_average: number
  vote_count: number
}

export interface TVNetworkAlternative {
  id: number
  name: string
}

export interface TVSeason {
  air_date: string
  episode_count: number
  id: number
  poster_path?: null
  season_number: number
}

export type TVAiringTodayResponse = ResultsResponse<TVAiringTodayResult>

export interface TVAiringTodayResult {
  poster_path?: string | null
  popularity: number
  id: number
  backdrop_path?: string | null
  vote_average: number
  overview: string
  first_air_date: string
  origin_country?: (string | null)[] | null
  genre_ids?: (number | null)[] | null
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export type TVOnTheAirResponse = ResultsResponse<TVOnTheAirResult>

export interface TVOnTheAirResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path?: string | null
  vote_average: number
  overview: string
  first_air_date: string
  origin_country?: (string | null)[] | null
  genre_ids?: (number | null)[] | null
  original_language: string
  vote_count: number
  name: string
  original_name: string
}

export type TVPopularResponse = ResultsResponse<TVPopularResult>

export interface TVPopularResult {
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

export type TVTopRatedResponse = ResultsResponse<TVTopRatedResult>

export interface TVTopRatedResult {
  poster_path: string
  popularity: number
  id: number
  backdrop_path: string
  vote_average: number
  overview: string
  first_air_date: string
  origin_country?: (string | null)[] | null
  genre_ids?: number[] | null
  original_language: string
  vote_count: number
  name: string
  original_name: string
}
