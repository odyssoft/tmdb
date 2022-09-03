import Request from '../request'
import * as Types from '../types'

export const TVSeason = (apiKey: string, showId: number) => ({
  GetDetails: (season: number, options: Types.AppendOptions<Types.SeasonsAppend>) => {},
  GetAccountStates: () => {},
  GetAggregateCredits: () => {},
  GetChanges: () => {},
  GetCredits: () => {},
  GetExternalIds: () => {},
  GetImages: () => {},
  GetTranslations: () => {},
  GetVideos: () => {},
})

export default TVSeason
