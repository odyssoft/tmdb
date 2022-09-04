import { TVSeasonCast, TVSeasonCrew, TVSeasonGuestStar } from './seasons'

export interface TVEpisode {
  air_date: string
  crew: TVEpisodeCrew[]
  episode_number: number
  guest_stars: TVEpisodeGuestStar[]
  name: string
  overview: string
  id: number
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface TVEpisodeCrew {
  id: number
  credit_id: string
  name: string
  department: string
  job: string
  profile_path?: string
}

export interface TVEpisodeGuestStar {
  id: number
  name: string
  credit_id: string
  character: string
  order: number
  profile_path: string
}

export interface TVEpisodeCredits {
  cast: TVSeasonCast[]
  crew: TVSeasonCrew[]
  guest_stars: TVSeasonGuestStar[]
  id: number
}

export interface TVEpisodeImages {
  id: number
  stills: Still[]
}

export interface Still {
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1?: string
  vote_average: number
  vote_count: number
  width: number
}
