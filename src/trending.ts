import Request from './request'
import * as Types from './types'

export const Trending = (apiKey: string) => ({
  /**
   * Get the trending people on TMDB.
   * @param {string} time_window
   * @returns Promise<TrendingPeople>
   */
  People: (
    time_window: Types.TimeWindow = 'day',
    options: Types.PageOptions
  ): Promise<Types.TrendingPeopleResponse> =>
    Request(apiKey, `/trending/person/${time_window}`, options),

  /**
   * Get the trending TV shows on TMDB.
   * @param {string} time_window
   * @returns Promise<TrendingShows>
   */
  TV: (
    time_window: Types.TimeWindow = 'day',
    options: Types.PageOptions
  ): Promise<Types.TrendingShowsResponse> =>
    Request(apiKey, `/trending/tv/${time_window}`, options),
})

export default Trending
