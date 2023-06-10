export interface PersonChanges {
  changes: []
}

export interface PersonChange {
  key: string
  items: PersonChangeItem[]
}

export interface PersonChangeItem {
  id: string
  action: string
  time: string
  iso_639_1: string
  iso_3166_1: string
  value: string
}

export interface PersonCombinedCredits {
  cast?: any[]
  crew?: any[]
  id: number
}

interface BaseCredit {
  adult?: boolean | null
  backdrop_path?: string | null
  genre_ids?: number[] | null
  id: number
  original_language?: string | null
  original_title?: string | null
  name?: string | null
  overview?: string | null
  popularity?: number | null
  poster_path?: string | null
  release_date?: string | null
  title?: string | null
  video?: boolean | null
  vote_average?: number | null
  vote_count?: number | null
  credit_id?: string | null
}

interface BaseTVCredit extends BaseCredit {
  origin_country: string[]
  episode_count: number
  first_air_date: string | null
}

interface BaseCombinedCredit extends BaseCredit {
  media_type?: string | null
}

export interface PersonCombinedCast extends BaseCombinedCredit {
  character: string
  order: number
}
export interface PersonCombinedCrew extends BaseCombinedCredit {
  department: string
  job: string
}

export interface PersonCast extends BaseCredit {
  character: string
  order: number
}
export interface PersonCrew extends BaseCredit {
  department: string
  job: string
}

export interface PersonTVCast extends BaseTVCredit {
  character: string
}
export interface PersonTVCrew extends BaseTVCredit {
  department: string
  job: string
}

export interface PersonDetails {
  adult?: boolean
  also_known_as: string[]
  biography: string
  birthday: string
  deathday?: string | null
  gender?: number | null
  homepage?: string | null
  id: number
  imdb_id?: string | null
  known_for_department: string
  name: string
  place_of_birth?: string | null
  popularity: number
  profile_path?: string | null
}

export interface PersonExternalIds {
  id: number
  freebase_mid: string
  freebase_id: string
  imdb_id: string
  tvrage_id: number
  wikidata_id: string
  facebook_id: string
  instagram_id: string
  tiktok_id: string
  twitter_id: string
  youtube_id: string
}

export interface PersonImages {
  id: number
  profiles: PersonImage[]
}

export interface PersonImage {
  aspect_ratio: number
  height: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface PersonMovieCredits {
  id: number
  cast: PersonCast[]
  crew: PersonCrew[]
}

export interface PersonTVCredits {
  id: number
  cast: PersonTVCast[]
  crew: PersonTVCrew[]
}
