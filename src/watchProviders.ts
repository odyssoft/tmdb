import Request from './request'
import * as Types from './types'

const WatchProviders = (apiKey: string) => ({
  /**
   * Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
   * @param {object} options
   * @returns Promise<WatchProvidersRegions>
   */
  GetAvailableRegions: (options: Types.Options): Promise<Types.WatchProvidersRegions> =>
    Request(apiKey, `/watch/providers/regions`),

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for movies. You can specify a watch_region param if you want to further filter the list by country.
   * @param {object} options
   * @returns Promise<WatchProviders>
   */
  GetMovieProviders: (options?: Types.WatchProvidersOptions): Promise<Types.WatchProviders> =>
    Request(apiKey, `/watch/providers/movie`, options),

  /**
   * Returns a list of the watch provider (OTT/streaming) data we have available for TV series. You can specify a watch_region param if you want to further filter the list by country.
   * @param {object} options
   * @returns Promise<WatchProviders>
   */
  GetTVProviders: (options?: Types.WatchProvidersOptions): Promise<Types.WatchProviders> =>
    Request(apiKey, `/watch/providers/tv`, options),
})

export default WatchProviders
