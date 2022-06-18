const Request = async (apiKey: string, endpoint: string, options?: Object | any) => {
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

  return fetch(`https://api.themoviedb.org/3/${endpoint}?${extras.join('&')}`).then((response) =>
    response.json()
  )
}

export default Request
