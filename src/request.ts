import axios, { AxiosResponse } from 'axios'

const Request = async (apiKey: string, endpoint: string, options?: Object | any): Promise<any> => {
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

  return axios
    .get(`https://api.themoviedb.org/3${endpoint}?${extras.join('&')}`)
    .then(({ data }: AxiosResponse) => data)
}

export default Request
