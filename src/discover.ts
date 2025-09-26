import Request from './request'
import * as Types from './types'

export const Discover = (apiKey: string) => ({
  /**
   * Find TV shows using over 30 filters and sort options.
   */
  TV: (options?: Types.DiscoverOptions): Promise<Types.DiscoverTVResponse> =>
    Request(apiKey, '/discover/tv', options),
})
