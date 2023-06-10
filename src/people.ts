import Request from './request'
import * as Types from './types'

export const People = (apiKey: string) => ({
  /**
   * Query the top level details of a person.
   * @param {number} person_id
   * @param {object} options
   * @returns Prmoise<PersonDetails>
   */
  GetDetails: (
    person_id: number,
    options?: Types.AppendOptions<Types.PersonAppend>
  ): Promise<Types.PersonDetails> => Request(apiKey, `/person/${person_id}`, options),

  /**
   * Get the recent changes for a person.
   * @param {number} person_id
   * @param {object} options
   * @returns Promise<PersonChanges>
   */
  GetChanges: (
    person_id: number,
    options?: Types.PersonChangesOptions
  ): Promise<Types.PersonChanges> => Request(apiKey, `/person/${person_id}/changes`, options),

  /**
   * Get the combined movie and TV credits that belong to a person.
   * @param {number} person_id
   * @param {object} options
   * @returns Promise<PersonCombinedCredits>
   */
  GetCombinedCredits: (
    person_id: number,
    options?: Types.Options
  ): Promise<Types.PersonCombinedCredits> =>
    Request(apiKey, `/person/${person_id}/combined_credits`, options),

  /**
   * Get the external ID's that belong to a person.
   * @param {number} person_id
   * @returns Promise<PersonExternalIds>
   */
  GetExternalIds: (person_id: number): Promise<Types.PersonExternalIds> =>
    Request(apiKey, `/person/${person_id}/external_ids`),

  /**
   * Get the profile images that belong to a person.
   * @param {number} person_id
   * @returns Promise<PersonImages>
   */
  GetImages: (person_id: number): Promise<Types.PersonImages> =>
    Request(apiKey, `/person/${person_id}/images`),

  /**
   * Get the newest created person. This is a live response and will continuously change.#
   * @returns Promise<PersonDetails>
   */
  GetLatest: (): Promise<Types.PersonDetails> => Request(apiKey, `/person/latest`),

  /**
   * Get the movie credits for a person.
   * @param {number} person_id
   * @param {object} options
   * @returns Promise<PersonMovieCredits>
   */
  GetMovieCredits: (
    person_id: number,
    options?: Types.PageOptions
  ): Promise<Types.PersonMovieCredits> =>
    Request(apiKey, `/person/${person_id}/movie_credits`, options),

  /**
   * Get the TV credits that belong to a person.
   * @param {number} person_id
   * @param {object} options
   * @returns Promise<PersonTVCredits>
   */
  GetTVCredits: (person_id: number, options?: Types.PageOptions): Promise<Types.PersonTVCredits> =>
    Request(apiKey, `/person/${person_id}/tv_credits`, options),
})

export default People
