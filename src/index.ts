import TVSeason from 'tv/seasons'
import Search from './search'
import TV from './tv'

export * from './types'

const TMDB = (apiKey: string) => ({
  Search: Search(apiKey),
  TV: TV(apiKey),
  Season: (showId: number) => TVSeason(apiKey, showId),
})

export default TMDB
