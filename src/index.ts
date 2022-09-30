import TVEpisode from './tv/episodes'
import TVSeason from './tv/seasons'
import Search from './search'
import TV from './tv'

export * from './types'

const TMDB = (apiKey: string) => ({
  Search: Search(apiKey),
  TV: TV(apiKey),
  Episode: (showId: number, season_number: number) => TVEpisode(apiKey, showId, season_number),
  Season: (showId: number) => TVSeason(apiKey, showId),
})

export default TMDB
