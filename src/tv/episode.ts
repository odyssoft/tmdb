class Episode {
  private apiKey: string
  private show: number
  private season: number
  private episode: number
  constructor(apiKey: string, show: number, season: number, episode: number) {
    this.apiKey = apiKey
    this.show = show
    this.season = season
    this.episode = episode
  }
}

export default Episode
