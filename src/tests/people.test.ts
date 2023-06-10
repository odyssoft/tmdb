import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'

import people from '../people'

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

describe('People', () => {
  const People = people(MOCK_API_KEY)

  describe('GetDetails', () => {
    it('should call request with correct parameters', async () => {
      await People.GetDetails(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetChanges', () => {
    it('should call request with correct parameters', async () => {
      await People.GetChanges(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/changes?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetCombinedCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetCombinedCredits(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/combined_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetExternalIds', () => {
    it('should call request with correct parameters', async () => {
      await People.GetExternalIds(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/external_ids?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetImages', () => {
    it('should call request with correct parameters', async () => {
      await People.GetImages(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/images?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetLatest', () => {
    it('should call request with correct parameters', async () => {
      await People.GetLatest()
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/latest?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetMovieCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetMovieCredits(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/movie_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetTVCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetTVCredits(123)
      expect(mockGet).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/tv_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
})
