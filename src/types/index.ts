export type Pokemon = {
  id: number
  name: string
  isFavorite: boolean
  isComparison: boolean
}

export type PokemonDetails = {
  id: string
  name: string
  isFavorite: boolean
  isComparison: boolean
  height: number
  weight: number
  image: string
  stats: Stat[]
}

export type Stat = {
  name: string
  value: number
}
