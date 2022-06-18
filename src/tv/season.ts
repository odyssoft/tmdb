import Episode from './episode'

class Season {
  private apiKey: string
  private show: number
  private season: number
  constructor(apiKey: string, show: number, season: number) {
    this.apiKey = apiKey
    this.show = show
    this.season = season
  }

  Episode = (episode: number) => new Episode(this.apiKey, this.show, this.season, episode)
}

export default Season
