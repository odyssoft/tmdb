import People from './people'
import rateLimiter, { RateLimiter } from './rateLimiter'
import Search from './search'
import Trending from './trending'
import TV from './tv'
import TVEpisode from './tv/episodes'
import TVSeason from './tv/seasons'
import WatchProviders from './watchProviders'

export * from './types'
export { RateLimiter, rateLimiter }

const TMDB = (apiKey: string) => ({
  Episode: (showId: number, season_number: number) =>
    TVEpisode(apiKey, showId, season_number),
  People: People(apiKey),
  Search: Search(apiKey),
  Season: (showId: number) => TVSeason(apiKey, showId),
  Trending: Trending(apiKey),
  TV: TV(apiKey),
  WatchProviders: WatchProviders(apiKey),
  // Provide access to rate limiter instance and class
  RateLimiter: rateLimiter,
})

export default TMDB
