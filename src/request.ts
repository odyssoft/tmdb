import rateLimiter from './rateLimiter'

const Request = async (
  apiKey: string,
  endpoint: string,
  options?: Object | any
): Promise<any> => {
  // Wait for rate limiter to allow the request
  await rateLimiter.waitForSlot()
  const extras: string[] = [`api_key=${apiKey}`]
  if (!options || !options.hasOwnProperty('language')) {
    extras.push('language=en-US')
  }

  options &&
    Object.keys(options).forEach((key: string) =>
      extras.push(
        `${key}=${
          key === 'append_to_response' && Array.isArray(options[key])
            ? options[key].join()
            : options[key]
        }`
      )
    )

  const response = await fetch(
    `https://api.themoviedb.org/3${endpoint}?${extras.join('&')}`
  )

  if (!response.ok) {
    throw new Error(`TMDB request failed with status ${response.status}`)
  }

  return response.json()
}

export default Request
