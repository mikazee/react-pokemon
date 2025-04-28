export type Pokemon = {
  id: number
  name: string
}

export type PokemonDetails = {
  id: string
  name: string
  height: number
  weight: number
  image: string
  stats: Stat[]
}

export type Stat = {
  name: string
  value: number
}
