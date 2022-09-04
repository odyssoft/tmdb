export interface Options {
  /**
   * Pass a ISO 639-1 value to display translated data for the fields that support it.
   * minLength: 2
   * pattern: ([a-z]{2})-([A-Z]{2})
   * default: en-US
   */
  language?: string
}

export type TVAppend =
  | 'account_states'
  | 'aggregate_credits'
  | 'alternative_titles'
  | 'changes'
  | 'content_ratings'
  | 'credits'
  | 'episode_groups'
  | 'external_ids'
  | 'images'
  | 'keywords'
  | 'recommendations'
  | 'reviews'
  | 'screened_theatrically'
  | 'similar'
  | 'translations'
  | 'videos'
  | 'watch/providers'

export type SeasonsAppend =
  | 'account_states'
  | 'aggregate_credits'
  | 'changes'
  | 'credits'
  | 'external_ids'
  | 'images'
  | 'translations'
  | 'videos'

export type EpisodesAppend =
  | 'account_states'
  | 'changes'
  | 'credits'
  | 'external_ids'
  | 'images'
  | 'translations'
  | 'videos'

export interface AppendOptions<T> extends Options {
  /**
   * Append requests within the same namespace to the response.
   * Pattern: ([\w]+)
   */
  append_to_response?: T | T[]
}

export interface PageOptions extends Options {
  /**
   * Specify which page to query.
   * Minimum: 1
   * Maximum: 1000
   * default: 1
   */
  page?: number
}
