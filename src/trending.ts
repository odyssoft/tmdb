import Request from './request'
import * as Types from './types'

export const Trending = (apiKey: string) => ({
  /**
   * Get the trending people on TMDB.
   * @param {string} time_window
   * @returns Promise<TrendingPeople>
   */
  People: (time_window: Types.TimeWindow = 'day'): Promise<any> =>
    Request(apiKey, `/trending/person/${time_window}`),

  /**
   * Get the trending TV shows on TMDB.
   * @param {string} time_window
   * @returns Promise<TrendingShows>
   */
  TV: (time_window: Types.TimeWindow = 'day'): Promise<any> =>
    Request(apiKey, `/trending/tv/${time_window}`),
})

export default Trending
