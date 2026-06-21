import seasons from '../../tv/seasons'

const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
)

beforeEach(() => {
  mockFetch.mockClear()
  ;(globalThis as any).fetch = mockFetch
})

const MOCK_API_KEY = 'MOCK_API_KEY'

describe('Seasons', () => {
  const Seasons = seasons(MOCK_API_KEY, 48866)

  describe('GetDetails', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetDetails(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetAggregateCredits', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetAggregateCredits(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/aggregate_credits?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetCredits', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetCredits(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/credits?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetExternalIds', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetExternalIds(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/external_ids?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetImages', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetImages(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/images?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetTranslations', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetTranslations(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/translations?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
  describe('GetVideos', () => {
    it('should call request with correct parameters', (done) => {
      Seasons.GetVideos(1).then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/tv/48866/season/1/videos?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
})
