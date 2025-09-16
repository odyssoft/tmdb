import rateLimiter from '../rateLimiter'
import Request from '../request'

// Mock axios to avoid making real API calls
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { success: true } })),
}))

describe('Request with Rate Limiting Integration', () => {
  beforeEach(() => {
    rateLimiter.reset()
    jest.clearAllMocks()
  })

  afterEach(() => {
    rateLimiter.reset()
  })

  it('should enforce rate limiting on requests', async () => {
    const startTime = Date.now()

    // Make requests that would exceed the default rate limit
    // Using a smaller rate limiter for faster testing
    const testRateLimiter = new (require('../rateLimiter').RateLimiter)(3, 1000) // 3 requests per second

    // Replace the global rate limiter temporarily
    const originalWaitForSlot = rateLimiter.waitForSlot
    rateLimiter.waitForSlot = testRateLimiter.waitForSlot.bind(testRateLimiter)

    try {
      // Make 5 requests - should cause rate limiting
      const promises = []
      for (let i = 0; i < 5; i++) {
        promises.push(Request('test-api-key', '/test-endpoint'))
      }

      await Promise.all(promises)
      const endTime = Date.now()

      // Should have taken time due to rate limiting
      expect(endTime - startTime).toBeGreaterThan(800)
    } finally {
      // Restore original rate limiter
      rateLimiter.waitForSlot = originalWaitForSlot
    }
  }, 3000)

  it('should allow requests within rate limit without delay', async () => {
    const startTime = Date.now()

    // Make a few requests within the limit
    await Request('test-api-key', '/test-endpoint-1')
    await Request('test-api-key', '/test-endpoint-2')

    const endTime = Date.now()

    // Should complete quickly since we're within limits
    expect(endTime - startTime).toBeLessThan(200)
  })

  it('should pass through request parameters correctly', async () => {
    const axios = require('axios')

    await Request('test-api-key', '/test-endpoint', { query: 'test', page: 1 })

    expect(axios.get).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/test-endpoint?api_key=test-api-key&language=en-US&query=test&page=1'
    )
  })

  it('should handle request errors properly', async () => {
    const axios = require('axios')
    const error = new Error('Network error')
    axios.get.mockRejectedValueOnce(error)

    await expect(Request('test-api-key', '/test-endpoint')).rejects.toThrow(
      'Network error'
    )
  })
})
