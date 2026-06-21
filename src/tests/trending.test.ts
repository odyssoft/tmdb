import trending from '../trending'

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

describe('Trending', () => {
  const Trending = trending(MOCK_API_KEY)

  describe('People', () => {
    it('should call request with correct parameters', (done) => {
      Trending.People().then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/trending/person/day?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })

  describe('TV', () => {
    it('should call request with correct parameters', (done) => {
      Trending.TV().then(() => {
        expect(mockFetch).toHaveBeenCalledWith(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=${MOCK_API_KEY}&language=en-US`
        )
        done()
      })
    })
  })
})
