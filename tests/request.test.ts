import Request from 'request'

let mockResponse: any = {}
const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
)

//  @ts-ignore
globalThis.fetch = mockFetch

beforeEach(() => {
  mockFetch.mockClear()
})

const MOCK_API_KEY = 'MOCK_API_KEY'

describe('Request', () => {
  it('should default language to en-US when no options are passed', () => {
    Request(MOCK_API_KEY, '/test')
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US`
    )
  })

  it('should default language to en-US when no language option passed', () => {
    const options = {}
    Request(MOCK_API_KEY, '/test', options)
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US`
    )
  })

  it('should correctly set language when passed to options', () => {
    const options = {
      language: 'es-ES',
    }
    Request(MOCK_API_KEY, '/test', options)
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=es-ES`
    )
  })

  it('should append to response correctly with string option', () => {
    const options = {
      append_to_response: 'videos',
    }
    Request(MOCK_API_KEY, '/test', options)
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos`
    )
  })

  it('should append to response correctly with string option comma separated', () => {
    const options = {
      append_to_response: 'videos,images',
    }
    Request(MOCK_API_KEY, '/test', options)
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos,images`
    )
  })

  it('should append to response correctly with array of string', () => {
    const options = {
      append_to_response: ['videos', 'images'],
    }
    Request(MOCK_API_KEY, '/test', options)
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://api.themoviedb.org/3/test?api_key=${MOCK_API_KEY}&language=en-US&append_to_response=videos,images`
    )
  })
})
