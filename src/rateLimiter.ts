/**
 * Rate limiter implementation for TMDB API requests
 * Enforces a maximum of 40 requests per 10 seconds
 */
export class RateLimiter {
  private requests: number[] = []
  private readonly maxRequests: number
  private readonly timeWindow: number

  constructor(maxRequests: number = 40, timeWindowMs: number = 10000) {
    this.maxRequests = maxRequests
    this.timeWindow = timeWindowMs
  }

  /**
   * Check if a request can be made and track it
   * @returns Promise that resolves when the request can be made
   */
  async waitForSlot(): Promise<void> {
    return new Promise((resolve) => {
      const checkSlot = () => {
        const now = Date.now()

        // Remove expired timestamps (older than time window)
        this.requests = this.requests.filter(
          (timestamp) => now - timestamp < this.timeWindow
        )

        // Check if we can make a request
        if (this.requests.length < this.maxRequests) {
          // Add current timestamp and resolve
          this.requests.push(now)
          resolve()
        } else {
          // Calculate when the oldest request will expire
          const oldestRequest = Math.min(...this.requests)
          const waitTime = this.timeWindow - (now - oldestRequest)

          // Wait and try again
          setTimeout(checkSlot, Math.max(waitTime, 100))
        }
      }

      checkSlot()
    })
  }

  /**
   * Get current request count in the time window
   */
  getCurrentCount(): number {
    const now = Date.now()
    this.requests = this.requests.filter(
      (timestamp) => now - timestamp < this.timeWindow
    )
    return this.requests.length
  }

  /**
   * Get time until next slot is available (in milliseconds)
   */
  getTimeUntilNextSlot(): number {
    const now = Date.now()
    this.requests = this.requests.filter(
      (timestamp) => now - timestamp < this.timeWindow
    )

    if (this.requests.length < this.maxRequests) {
      return 0
    }

    const oldestRequest = Math.min(...this.requests)
    return Math.max(0, this.timeWindow - (now - oldestRequest))
  }

  /**
   * Reset the rate limiter
   */
  reset(): void {
    this.requests = []
  }
}

// Global rate limiter instance
const globalRateLimiter = new RateLimiter()

export default globalRateLimiter
