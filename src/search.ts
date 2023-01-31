import Request from './request'
import * as Types from './types'

const Search = (apiKey: string) => ({
  /**
   * Search for companies.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchCompanyResponse>
   */
  Companies: (options: Types.SearchNoLangOptions): Promise<Types.SearchCompanyResponse> =>
    Request(apiKey, `/search/company`, options),

  /**
   * Search for collections.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchCollectionResponse>
   */
  Collections: (options: Types.SearchOptions): Promise<Types.SearchCollectionResponse> =>
    Request(apiKey, `/search/collection`, options),

  /**
   * Search for keywords.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchKeywordResponse>
   */
  Keywords: (options: Types.SearchNoLangOptions): Promise<Types.SearchKeywordResponse> =>
    Request(apiKey, `/search/keyword`, options),

  /**
   * Search for movies.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchMovieResponse>
   */
  Movies: (options: Types.SearchMainOptions): Promise<Types.SearchMovieResponse> =>
    Request(apiKey, `/search/movie`, options),

  /**
   * Search multiple models in a single request.
   * Multi search currently supports searching for movies, tv shows and people in a single request.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchMultiResponse>
   */
  Multi: (options: Types.SearchMainOptions): Promise<Types.SearchMultiResponse> =>
    Request(apiKey, `/search/multi`, options),

  /**
   * Search for people.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchPersonResponse>
   */
  People: (options: Types.SearchMainOptions): Promise<Types.SearchPersonResponse> =>
    Request(apiKey, `/search/person`, options),

  /**
   * Search for a TV show.
   * @param {string} query
   * @param {object} options
   * @returns Promise<SearchTVResponse>
   */
  TVShows: (options: Types.SearchMainOptions): Promise<Types.SearchTVResponse> =>
    Request(apiKey, `/search/tv`, options),
})

export default Search
