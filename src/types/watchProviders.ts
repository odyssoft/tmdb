export interface WatchProvidersRegions {
  results: WatchProvidersRegionsResult[]
}

export interface WatchProvidersRegionsResult {
  iso_3166_1: string
  english_name: string
  native_name: string
}

export interface WatchProviders {
  results: WatchProviderResult[]
}

export interface WatchProviderResult {
  display_priority: number
  logo_path: string
  provider_id: number
  provider_name: string
  display_priorities: {
    [key: string]: number
  }
}
