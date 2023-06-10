import TVEpisode from './tv/episodes'
import TVSeason from './tv/seasons'
import People from './people'
import Search from './search'
import TV from './tv'
import WatchProviders from './watchProviders'

export * from './types'

const TMDB = (apiKey: string) => ({
  People: People(apiKey),
  Search: Search(apiKey),
  TV: TV(apiKey),
  Episode: (showId: number, season_number: number) => TVEpisode(apiKey, showId, season_number),
  Season: (showId: number) => TVSeason(apiKey, showId),
  WatchProviders: WatchProviders(apiKey),
})

export default TMDB
