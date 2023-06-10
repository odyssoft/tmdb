import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'

import episodes from '../../tv/episodes'

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

describe('Episodes', () => {
  const Episodes = episodes(MOCK_API_KEY, 48866, 2)

  describe('GetDetails', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetDetails(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetCredits', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetCredits(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1/credits?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetExternalIds', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetExternalIds(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1/external_ids?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetImages', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetImages(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1/images?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetTranslations', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetTranslations(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1/translations?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetVideos', () => {
    it('should call request with correct parameters', (done) => {
      Episodes.GetVideos(1).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/2/episode/1/videos?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
})
