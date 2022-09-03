import Request from '../request'
import * as Types from '../types'

export const TVSeason = (apiKey: string, showId: number) => ({
  /**
   * Get the TV season details by id.
   * @param {number} season
   * @param {object} options
   * @returns Promise<TVSeasonDetails>
   */
  GetDetails: (season: number, options?: Types.AppendOptions<Types.SeasonsAppend>) => {},

  /**
   * Get the aggregate credits for TV season.
   * This call differs from the main credits call in that it does not only return the season credits, but rather is a view of all the cast & crew for all of the episodes belonging to a season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonAggregateCredits>
   */
  GetAggregateCredits: (season: number, options?: Types.Options) => {},

  /**
   * Get the credits for TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonCredits>
   */
  GetCredits: (season: number, options?: Types.Options) => {},

  /**
   * Get the external ids for a TV season. We currently support the following external sources.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVExternalIds>
   */
  GetExternalIds: (season: number, options?: Types.Options) => {},

  /**
   * Get the images that belong to a TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonImages>
   */
  GetImages: (season: number, options?: Types.Options) => {},

  /**
   *
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonTranslations>
   */
  GetTranslations: (season: number, options?: Types.Options) => {},

  /**
   * Get the videos that have been added to a TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonVideos>
   */
  GetVideos: (season: number, options?: Types.Options) => {},
})

export default TVSeason
