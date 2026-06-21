import people from '../people'

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

describe('People', () => {
  const People = people(MOCK_API_KEY)

  describe('GetDetails', () => {
    it('should call request with correct parameters', async () => {
      await People.GetDetails(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetChanges', () => {
    it('should call request with correct parameters', async () => {
      await People.GetChanges(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/changes?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetCombinedCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetCombinedCredits(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/combined_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetExternalIds', () => {
    it('should call request with correct parameters', async () => {
      await People.GetExternalIds(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/external_ids?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetImages', () => {
    it('should call request with correct parameters', async () => {
      await People.GetImages(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/images?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetLatest', () => {
    it('should call request with correct parameters', async () => {
      await People.GetLatest()
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/latest?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetMovieCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetMovieCredits(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/movie_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
  describe('GetTVCredits', () => {
    it('should call request with correct parameters', async () => {
      await People.GetTVCredits(123)
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.themoviedb.org/3/person/123/tv_credits?api_key=${MOCK_API_KEY}&language=en-US`
      )
    })
  })
})
