import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'

import tv from '../../tv'

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

describe('TV', () => {
  const TV = tv(MOCK_API_KEY)

  describe('GetDetails', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetDetails(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetAggregateCredits', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetAggregateCredits(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/aggregate_credits?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetAlternativeTitles', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetAlternativeTitles(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/alternative_titles?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetChanges', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetChanges(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/changes?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetContentRatings', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetContentRatings(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/content_ratings?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetCredits', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetCredits(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/credits?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetEpisodeGroups', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetEpisodeGroups(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/episode_groups?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetExternalIDs', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetExternalIDs(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/external_ids?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetImages', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetImages(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/images?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetKeywords', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetKeywords(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/keywords?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetRecommendations', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetRecommendations(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/recommendations?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetReviews', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetReviews(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/reviews?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetScreenedTheatrically', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetScreenedTheatrically(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/screened_theatrically?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetSimilarTVShows', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetSimilarTVShows(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/similar?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetTranslations', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetTranslations(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/translations?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetVideos', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetVideos(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/videos?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetWatchProviders', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetWatchProviders(10).then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/10/watch/providers?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetLatest', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetLatest().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/latest?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetTVAiringToday', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetTVAiringToday().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/airing_today?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetTVOnTheAir', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetTVOnTheAir().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/on_the_air?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetPopular', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetPopular().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/popular?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('GetTopRated', () => {
    it('should call request with correct parameters', (done) => {
      TV.GetTopRated().then(() => {
        expect(mockGet).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
})
