import axios, { AxiosResponse } from 'axios'

import search from '../search'

const mockAxiosResponse: AxiosResponse = {
  config: {},
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

describe('Search', () => {
  const Search = search(MOCK_API_KEY)

  describe('Companies', () => {
    it('should call request with correct parameters', (done) => {
      Search.Companies({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/company?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('Collections', () => {
    it('should call request with correct parameters', (done) => {
      Search.Collections({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/collection?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('Keywords', () => {
    it('should call request with correct parameters', (done) => {
      Search.Keywords({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/keyword?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('Movies', () => {
    it('should call request with correct parameters', (done) => {
      Search.Movies({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/movie?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('Multi', () => {
    it('should call request with correct parameters', (done) => {
      Search.Multi({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/multi?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('People', () => {
    it('should call request with correct parameters', (done) => {
      Search.People({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/person?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
  describe('TVShows', () => {
    it('should call request with correct parameters', (done) => {
      Search.TVShows({ query: 'term' }).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/search/tv?api_key=${MOCK_API_KEY}&language=en-US&query=term`
        )
        done()
      })
    })
  })
})
