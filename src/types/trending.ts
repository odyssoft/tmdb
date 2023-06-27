import { ResultsResponse } from './result'

export type TimeWindow = 'day' | 'week'

export type TrendingPeopleResponse = ResultsResponse<TrendingPerson>

export type TrendingPerson = {
  adult: boolean
  id: number
  name: string
  original_name: string
  media_type: string
  popularity: number
  gender: number
  known_for_department: string
  profile_path?: string
  known_for: KnownFor[]
}

export type KnownFor = {
  adult: boolean
  backdrop_path?: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TrendingShowsResponse = ResultsResponse<TrendingShow>

export type TrendingShow = {
  adult: boolean
  backdrop_path: string
  id: number
  name: string
  original_language: string
  original_name: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  first_air_date: string
  vote_average: number
  vote_count: number
  origin_country: string[]
}
