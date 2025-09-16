/**
 * Rate limiter configuration options
 */
export interface RateLimiterOptions {
  /** Maximum number of requests allowed */
  maxRequests: number
  /** Time window in milliseconds */
  timeWindowMs: number
}

/**
 * Rate limiter status information
 */
export interface RateLimiterStatus {
  /** Current number of requests in the time window */
  currentCount: number
  /** Maximum requests allowed */
  maxRequests: number
  /** Time window in milliseconds */
  timeWindow: number
  /** Time until next slot is available (in milliseconds) */
  timeUntilNextSlot: number
}

export { RateLimiter } from '../rateLimiter'
