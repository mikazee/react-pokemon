export type PokemonListItem = {
  id: number
  name: string
  url: string
  image: string
  isFavorite?: boolean
  isComparison?: boolean
}

export type PokemonDetails = PokemonListItem & {
  height: number
  weight: number
  stats: Stat[]
}

export type Stat = {
  name: string
  value: number
}

export type PokemonApiResponse = {
  count: number
  next: string | null
  previous: string | null
  results: Array<{ name: string; url: string }>
}
