import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'

import Request from '../request'

const mockAxiosResponse: AxiosResponse = {
  config: {
    headers: {} as AxiosRequestHeaders,
  },
  data: {},
  headers: {},
  status: 200,
  statusText: 'OK',
}

const mockGet = jest.fn((): Promise<any> => Promise.resolve(mockAxiosResponse))

axios.get = mockGet

beforeEach(() => {
  mockGet.mockClear()
})

const MOCK_API_KEY = 'MOCK_API_KEY'

describe('Request', () => {
  it('should default language to en-US when no options are passed', (done) => {
    Request(MOCK_API_KEY, '/test').then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US`
      )
      done()
    })
  })

  it('should default language to en-US when no language option passed', (done) => {
    const options = {}
    Request(MOCK_API_KEY, '/test', options).then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US`
      )
      done()
    })
  })

  it('should correctly set language when passed to options', (done) => {
    const options = { language: 'es-ES' }
    Request(MOCK_API_KEY, '/test', options).then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=es-ES`
      )
      done()
    })
  })

  it('should append to response correctly with string option', (done) => {
    const options = { append_to_response: 'videos' }
    Request(MOCK_API_KEY, '/test', options).then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos`
      )
      done()
    })
  })

  it('should append to response correctly with string option comma separated', (done) => {
    const options = { append_to_response: 'videos,images' }
    Request(MOCK_API_KEY, '/test', options).then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos,images`
      )
      done()
    })
  })

  it('should append to response correctly with array of string', (done) => {
    const options = { append_to_response: ['videos', 'images'] }
    Request(MOCK_API_KEY, '/test', options).then(() => {
      expect(mockGet).toHaveBeenLastCalledWith(
        `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos,images`
      )
      done()
    })
  })
})
