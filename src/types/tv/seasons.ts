import { TVCast, TVCrew, TVExternalIds } from '.'

export interface TVSeasonDetails {
  _id: string
  air_date?: string | null | undefined
  episodes?: TVSeasonEpisode[]
  name?: string
  overview?: string
  id: number
  poster_path?: string | null | undefined
  season_number?: number

  //  Append to response
  account_states?: any
  aggregate_credits?: TVSeasonAggregateCredits
  changes?: any
  credits?: TVSeasonCredits
  external_ids?: TVExternalIds
  images?: TVSeasonImages
  translations?: TVSeasonTranslations
  videos?: TVSeasonVideos
}

export interface TVSeasonEpisode {
  air_date?: string
  episode_number?: number
  crew?: TVSeasonCrew[]
  guest_stars?: TVSeasonGuestStar[]
  id: number
  name?: string
  overview?: string
  production_code?: string
  season_number?: number
  still_path?: string
  vote_average?: number
  vote_count?: number
}

export interface TVSeasonCrew {
  adult?: boolean
  credit_id?: string
  department?: string
  gender?: number
  id: number
  job?: string
  known_for_department?: string
  name?: string
  original_name?: string
  popularity?: number
  profile_path?: string
}

export interface TVSeasonCast {
  adult?: boolean
  character?: string
  credit_id?: string
  gender?: number
  id: number
  known_for_department?: string
  name?: string
  order?: number
  original_name?: string
  popularity?: number
  profile_path?: string
}

export interface TVSeasonGuestStar {
  adult?: boolean
  character?: string
  credit_id?: string
  gender?: number
  id: number
  known_for_department?: string
  name?: string
  order?: number
  original_name?: string
  popularity?: number
  profile_path?: string
}

export interface TVSeasonAggregateCredits {
  cast?: TVCast[]
  crew?: TVCrew[]
  id: number
}

export interface TVSeasonCredits {
  cast?: TVSeasonCast[]
  crew?: TVSeasonCrew[]
  id: number
}

export interface TVSeasonImages {
  id: number
  posters?: TVSeasonPoster[]
}

export interface TVSeasonPoster {
  aspect_ratio?: number
  file_path?: string
  height?: number
  iso_639_1?: string
  vote_average?: number
  vote_count?: number
  width?: number
}

export interface TVSeasonTranslations {
  id: number
  translations?: TVSeasonTranslation[]
}

export interface TVSeasonTranslation {
  iso_3166_1?: string
  iso_639_1?: string
  name?: string
  english_name?: string
  data?: TVSeasonTranslationData
}

export interface TVSeasonTranslationData {
  name?: string
  overview?: string
}

export interface TVSeasonVideos {
  id: number
  results?: TVSeasonVideo[]
}

export interface TVSeasonVideo {
  iso_639_1?: string
  iso_3166_1?: string
  name?: string
  key?: string
  site?: string
  size?: number
  type?: string
  official?: boolean
  published_at?: string
  id: string
}
