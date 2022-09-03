export interface TVSeasonDetails {
  _id: string
  air_date: string | null | undefined
  episodes: TVSeasonEpisode[]
  name: string
  overview: string
  id: number
  poster_path: string | null | undefined
  season_number: number
}

export interface TVSeasonEpisode {
  air_date: string
  episode_number: number
  crew: Crew[]
  guest_stars: GuestStar[]
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: string
  vote_average: number
  vote_count: number
}

export interface TVSeasonAggregateCredits {}

export interface TVSeasonCredits {}

export interface TVSeasonExternalIds {}

export interface TVSeasonImages {}

export interface TVSeasonTranslations {}

export interface TVSeasonVideos {}
