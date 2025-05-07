import { PokemonDetails } from '../../types'
import { mockPokemons } from '../../data/pokemonsData.tsx'

export const pokemonsComparisonLoader = (): PokemonDetails[] => {
  return mockPokemons
}
