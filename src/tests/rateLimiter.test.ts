import { RateLimiter } from '../rateLimiter'

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter

  beforeEach(() => {
    rateLimiter = new RateLimiter(5, 1000) // 5 requests per 1 second for testing
  })

  afterEach(() => {
    rateLimiter.reset()
  })

  describe('constructor', () => {
    it('should create a rate limiter with default values', () => {
      const defaultLimiter = new RateLimiter()
      expect(defaultLimiter.getCurrentCount()).toBe(0)
    })

    it('should create a rate limiter with custom values', () => {
      const customLimiter = new RateLimiter(10, 2000)
      expect(customLimiter.getCurrentCount()).toBe(0)
    })
  })

  describe('waitForSlot', () => {
    it('should allow requests up to the limit', async () => {
      const startTime = Date.now()

      // Make 5 requests (at the limit)
      for (let i = 0; i < 5; i++) {
        await rateLimiter.waitForSlot()
      }

      const endTime = Date.now()
      expect(rateLimiter.getCurrentCount()).toBe(5)
      // Should complete quickly since we're within the limit
      expect(endTime - startTime).toBeLessThan(100)
    })

    it('should delay requests when limit is exceeded', async () => {
      const startTime = Date.now()

      // Make 5 requests to reach the limit
      for (let i = 0; i < 5; i++) {
        await rateLimiter.waitForSlot()
      }

      // This 6th request should be delayed
      await rateLimiter.waitForSlot()

      const endTime = Date.now()
      expect(endTime - startTime).toBeGreaterThan(900) // Should wait close to 1 second
    }, 2000)

    it('should handle multiple concurrent requests', async () => {
      const promises = []
      const startTime = Date.now()

      // Start 7 requests concurrently (2 more than limit)
      for (let i = 0; i < 7; i++) {
        promises.push(rateLimiter.waitForSlot())
      }

      await Promise.all(promises)
      const endTime = Date.now()

      // Check that some requests were delayed
      expect(endTime - startTime).toBeGreaterThan(900)

      // The rate limiter should have processed all requests
      // Note: The count might be less than 7 because some requests
      // may have expired by the time we check
      expect(rateLimiter.getCurrentCount()).toBeGreaterThan(0)
    }, 3000)
  })

  describe('getCurrentCount', () => {
    it('should return 0 initially', () => {
      expect(rateLimiter.getCurrentCount()).toBe(0)
    })

    it('should track current request count', async () => {
      await rateLimiter.waitForSlot()
      expect(rateLimiter.getCurrentCount()).toBe(1)

      await rateLimiter.waitForSlot()
      expect(rateLimiter.getCurrentCount()).toBe(2)
    })

    it('should clean up expired requests', async () => {
      // Make 3 requests
      for (let i = 0; i < 3; i++) {
        await rateLimiter.waitForSlot()
      }
      expect(rateLimiter.getCurrentCount()).toBe(3)

      // Wait for requests to expire
      await new Promise((resolve) => setTimeout(resolve, 1100))

      // Check count again - should be 0 after cleanup
      expect(rateLimiter.getCurrentCount()).toBe(0)
    }, 2000)
  })

  describe('getTimeUntilNextSlot', () => {
    it('should return 0 when under the limit', () => {
      expect(rateLimiter.getTimeUntilNextSlot()).toBe(0)
    })

    it('should return time to wait when at limit', async () => {
      // Fill up the rate limiter
      for (let i = 0; i < 5; i++) {
        await rateLimiter.waitForSlot()
      }

      const timeToWait = rateLimiter.getTimeUntilNextSlot()
      expect(timeToWait).toBeGreaterThan(0)
      expect(timeToWait).toBeLessThanOrEqual(1000)
    })
  })

  describe('reset', () => {
    it('should clear all tracked requests', async () => {
      // Make some requests
      for (let i = 0; i < 3; i++) {
        await rateLimiter.waitForSlot()
      }
      expect(rateLimiter.getCurrentCount()).toBe(3)

      // Reset
      rateLimiter.reset()
      expect(rateLimiter.getCurrentCount()).toBe(0)
      expect(rateLimiter.getTimeUntilNextSlot()).toBe(0)
    })
  })

  describe('integration with different configurations', () => {
    it('should work with TMDB API limits (40 requests per 10 seconds)', async () => {
      const tmdbLimiter = new RateLimiter(40, 10000)

      // Should allow 40 requests quickly
      const startTime = Date.now()
      for (let i = 0; i < 40; i++) {
        await tmdbLimiter.waitForSlot()
      }
      const endTime = Date.now()

      expect(tmdbLimiter.getCurrentCount()).toBe(40)
      expect(endTime - startTime).toBeLessThan(1000) // Should complete in under 1 second

      tmdbLimiter.reset()
    })
  })
})
