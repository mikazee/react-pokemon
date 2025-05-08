import { mockPokemons } from '../../data/pokemonsData.tsx'
import { PokemonDetails } from '../../types'

export const favoritePokemonsLoader = () => {
  return mockPokemons.filter((pokemon: PokemonDetails) => pokemon.isFavorite)
}
