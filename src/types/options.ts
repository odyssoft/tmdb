export interface Options {
  /**
   * Pass a ISO 639-1 value to display translated data for the fields that support it.
   * minLength: 2
   * pattern: ([a-z]{2})-([A-Z]{2})
   * default: en-US
   */
  language?: string
}

export interface AppendOptions extends Options {
  /**
   * Append requests within the same namespace to the response.
   * Pattern: ([\w]+)
   */
  append_to_response?: string | string[]
}

export interface PageOptions extends Options {
  /**
   * Specify which page to query.
   * Minimum: 1
   * Maximum: 1000
   * default: 1
   */
  page?: number
}
