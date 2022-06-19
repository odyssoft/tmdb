import Search from './search'
import TV from './tv'

export * from './types'

const TMDB = (apiKey: string) => ({
  Search: Search(apiKey),
  TV: TV(apiKey),
})

export default TMDB
