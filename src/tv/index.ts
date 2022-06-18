import Season from './season'

class TV {
  private apiKey: string
  private show?: number
  constructor(apiKey: string, show?: number) {
    this.apiKey = apiKey
    if (show) {
      this.show = show
    }
  }

  GetDetails = () => {}

  GetDetails = () => {}

  Search = () => {}

  Season = (season: number) => {
    if (this.show) {
      return new Season(this.apiKey, this.show, season)
    }
    throw new Error('Missing Show parameter.')
  }
}

export default TV
