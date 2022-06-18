import TV from 'tv'

class TheMovieDatabase {
  private apiKey: string
  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  TV = (show?: number) => new TV(this.apiKey, show)
}

const TMDB = (apiKey: string) => new TheMovieDatabase(apiKey)

export default TMDB
