import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'

import trending from '../trending'

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

describe('Trending', () => {
  const Trending = trending(MOCK_API_KEY)

  describe('People', () => {
    it('should call request with correct parameters', (done) => {
      Trending.People().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/trending/person/day?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('TV', () => {
    it('should call request with correct parameters', (done) => {
      Trending.TV().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
})
