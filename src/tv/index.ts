import Request from '../request'
import * as Types from '../types'

export const TV = (apiKey: string) => ({
  /**
   * Get the primary TV show details by id.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVDetails>
   */
  GetDetails: (
    tv_id: number,
    options?: Types.AppendOptions<Types.TVAppend>
  ): Promise<Types.TVDetails> => Request(apiKey, `/tv/${tv_id}`, options),

  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV show.
   * This call differs from the main credits call in that it does not return the newest season but rather, is a view of all the entire cast & crew for all episodes belonging to a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVAggregateCredits>
   */
  GetAggregateCredits: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVAggregateCredits> =>
    Request(apiKey, `/tv/${tv_id}/aggregate_credits`, options),

  /**
   * Returns all of the alternative titles for a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVAlternativeTitles>
   */
  GetAlternativeTitles: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVAlternativeTitles> =>
    Request(apiKey, `/tv/${tv_id}/alternative_titles`, options),

  /**
   * Get the changes for a TV show. By default only the last 24 hours are returned.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVChanges>
   */
  GetChanges: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVChanges> =>
    Request(apiKey, `/tv/${tv_id}/changes`, options),

  /**
   * Get the list of content ratings (certifications) that have been added to a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVContentRatingResult>
   */
  GetContentRatings: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVContentRatingResult> =>
    Request(apiKey, `/tv/${tv_id}/content_ratings`, options),

  /**
   * Get the credits (cast and crew) that have been added to a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVCredits>
   */
  GetCredits: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVCredits> =>
    Request(apiKey, `/tv/${tv_id}/credits`, options),

  /**
   * Get all of the episode groups that have been created for a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVEpisodeGroupResult>
   */
  GetEpisodeGroups: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVEpisodeGroupResult> =>
    Request(apiKey, `/tv/${tv_id}/episode_groups`, options),

  /**
   * Get the external ids for a TV show. We currently support the following external sources.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVExternalIds>
   */
  GetExternalIDs: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVExternalIds> =>
    Request(apiKey, `/tv/${tv_id}/external_ids`, options),

  /**
   * Get the images that belong to a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVImages>
   */
  GetImages: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVImages> => Request(apiKey, `/tv/${tv_id}/images`, options),

  /**
   * Get the keywords that have been added to a TV show.
   * @param {number} tv_id
   * @returns Promise<TVKeywords>
   */
  GetKeywords: (tv_id: number): Promise<Types.TVKeywords> =>
    Request(apiKey, `/tv/${tv_id}/keywords`),

  /**
   * Get the list of TV show recommendations for this item.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVRecommendationsResponse>
   */
  GetRecommendations: (
    tv_id: number,
    options?: Types.PageOptions
  ): Promise<Types.TVRecommendationsResponse> =>
    Request(apiKey, `/tv/${tv_id}/recommendations`, options),

  /**
   * Get the reviews for a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVReviewsResponse>
   */
  GetReviews: (
    tv_id: number,
    options?: Types.PageOptions
  ): Promise<Types.TVReviewsResponse> =>
    Request(apiKey, `/tv/${tv_id}/reviews`, options),

  /**
   * Get a list of seasons or episodes that have been screened in a film festival or theatre.
   * @param {number} tv_id
   * @returns Promise<TVScreenedTheatrically>
   */
  GetScreenedTheatrically: (
    tv_id: number
  ): Promise<Types.TVScreenedTheatrically> =>
    Request(apiKey, `/tv/${tv_id}/screened_theatrically`),

  /**
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVSimilarTVResponse>
   */
  GetSimilarTVShows: (
    tv_id: number,
    options?: Types.PageOptions
  ): Promise<Types.TVSimilarTVResponse> =>
    Request(apiKey, `/tv/${tv_id}/similar`, options),

  /**
   * Get a list of the translations that exist for a TV show.
   * @param {number} tv_id
   * @returns Promise<TVTranslations>
   */
  GetTranslations: (tv_id: number): Promise<Types.TVTranslations> =>
    Request(apiKey, `/tv/${tv_id}/translations`),

  /**
   * Get the videos that have been added to a TV show.
   * @param {number} tv_id
   * @param {object} options
   * @returns Promise<TVVideosResponse>
   */
  GetVideos: (
    tv_id: number,
    options?: Types.Options
  ): Promise<Types.TVVideosResponse> =>
    Request(apiKey, `/tv/${tv_id}/videos`, options),

  /**
   * Powered by our partnership with JustWatch, you can query this method to get a list of the availabilities per country by provider.
   * This is not going to return full deep links, but rather, it's just enough information to display what's available where.
   * You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
   * Please note: In order to use this data you must attribute the source of the data as JustWatch. If we find any usage not complying with these terms we will revoke access to the API.
   * @param {number} tv_id
   * @returns Promise<TVWatchProviderResult>
   */
  GetWatchProviders: (tv_id: number): Promise<Types.TVWatchProviderResult> =>
    Request(apiKey, `/tv/${tv_id}/watch/providers`),

  /**
   * Get the most newly created TV show. This is a live response and will continuously change.
   * @param {object} options
   * @returns Promise<TVLatest>
   */
  GetLatest: (options?: Types.Options): Promise<Types.TVLatest> =>
    Request(apiKey, `/tv/latest`, options),

  /**
   * Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
   * @param {object} options
   * @returns Promise<TVAiringTodayResponse>
   */
  GetTVAiringToday: (
    options?: Types.PageOptions
  ): Promise<Types.TVAiringTodayResponse> =>
    Request(apiKey, `/tv/airing_today`, options),

  /**
   * Get a list of shows that are currently on the air.
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   * @param {object} options
   * @returns Promise<TVOnTheAirResponse>
   */
  GetTVOnTheAir: (
    options?: Types.PageOptions
  ): Promise<Types.TVOnTheAirResponse> =>
    Request(apiKey, `/tv/on_the_air`, options),

  /**
   * Get a list of the current popular TV shows on TMDB. This list updates daily.
   * @param {object} options
   * @returns Promise<TVPopularResponse>
   */
  GetPopular: (options?: Types.PageOptions): Promise<Types.TVPopularResponse> =>
    Request(apiKey, `/tv/popular`, options),

  /**
   * Get a list of the top rated TV shows on TMDB.
   * @param {object} options
   * @returns Promise<TVTopRatedResponse>
   */
  GetTopRated: (
    options?: Types.PageOptions
  ): Promise<Types.TVTopRatedResponse> =>
    Request(apiKey, `/tv/top_rated`, options),
})

export default TV
