import Request from '../request'
import * as Types from '../types'

export const TVSeason = (apiKey: string, tv_id: number) => ({
  /**
   * Get the TV season details by id.
   * @param {number} season
   * @param {object} options
   * @returns Promise<TVSeasonDetails>
   */
  GetDetails: (
    season: number,
    options?: Types.AppendOptions<Types.SeasonsAppend>
  ): Promise<Types.TVSeasonDetails> => Request(apiKey, `/tv/${tv_id}/season/${season}`, options),

  /**
   * Get the aggregate credits for TV season.
   * This call differs from the main credits call in that it does not only return the season credits, but rather is a view of all the cast & crew for all of the episodes belonging to a season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonAggregateCredits>
   */
  GetAggregateCredits: (
    season: number,
    options?: Types.Options
  ): Promise<Types.TVSeasonAggregateCredits> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/aggregate_credits`, options),

  /**
   * Get the credits for TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonCredits>
   */
  GetCredits: (season: number, options?: Types.Options): Promise<Types.TVSeasonCredits> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/credits`, options),

  /**
   * Get the external ids for a TV season. We currently support the following external sources.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVExternalIds>
   */
  GetExternalIds: (season: number, options?: Types.Options): Promise<Types.TVExternalIds> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/external_ids`, options),

  /**
   * Get the images that belong to a TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonImages>
   */
  GetImages: (season: number, options?: Types.Options): Promise<Types.TVSeasonImages> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/images`, options),

  /**
   *
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonTranslations>
   */
  GetTranslations: (season: number, options?: Types.Options): Promise<Types.TVSeasonTranslations> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/translations`, options),

  /**
   * Get the videos that have been added to a TV season.
   * @param {number} season
   * @param {options} options
   * @returns Promise<TVSeasonVideo>
   */
  GetVideos: (season: number, options?: Types.Options): Promise<Types.TVSeasonVideos> =>
    Request(apiKey, `/tv/${tv_id}/season/${season}/videos`, options),
})

export default TVSeason
