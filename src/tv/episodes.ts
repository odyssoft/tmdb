import Request from '../request'
import * as Types from '../types'

export const TVEpisode = (
  apiKey: string,
  tv_id: number,
  season_number: number
) => ({
  /**
   * Get the TV episode details by id.
   * @param {number} episode_number
   * @param {object} options
   * @returns Promise<TVEpisode>
   */
  GetDetails: (
    episode_number: number,
    options?: Types.AppendOptions<Types.EpisodesAppend>
  ): Promise<Types.TVEpisode> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}`,
      options
    ),

  /**
   * Get the credits (cast, crew and guest stars) for a TV episode.
   * @param {number} episode_number
   * @param {object} options
   * @returns Promise<TVEpisodeCredits>
   */
  GetCredits: (
    episode_number: number,
    options?: Types.Options
  ): Promise<Types.TVEpisodeCredits> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}/credits`,
      options
    ),

  /**
   * Get the external ids for a TV episode. We currently support the following external sources.
   * @param {number} episode_number
   * @returns {object} Promise<TVExternalIds>
   */
  GetExternalIds: (episode_number: number): Promise<Types.TVExternalIds> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}/external_ids`
    ),

  /**
   * Get the images that belong to a TV episode.
   * @param {number} episode_number
   * @returns {object} Promise<TVEpisodeImages>
   */
  GetImages: (episode_number: number): Promise<Types.TVEpisodeImages> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}/images`
    ),

  /**
   * Get the translation data for an episode.
   * @param {number} episode_number
   * @returns {object} Promise<TVSeasonTranslations>
   */
  GetTranslations: (
    episode_number: number
  ): Promise<Types.TVSeasonTranslations> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}/translations`
    ),

  /**
   * Get the videos that have been added to a TV episode.
   * @param {number} episode_number
   * @param {object} options
   * @returns Promise<TVEpisodeVideos>
   */
  GetVideos: (
    episode_number: number,
    options?: Types.Options
  ): Promise<Types.TVSeasonVideos> =>
    Request(
      apiKey,
      `/tv/${tv_id}/season/${season_number}/episode/${episode_number}/videos`,
      options
    ),
})

export default TVEpisode
