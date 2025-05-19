import { RootState } from '../index.ts'
import { getFavoritePokemonState } from '../favorite-pokemons/selectors.ts'

export const getPokemonDetails = (state: RootState) => {
  const pokemon = state.pokemonDetails.pokemon
  const { list } = getFavoritePokemonState(state)
  return { ...pokemon, isFavorite: list.includes(pokemon.id) }
}
export const getPokemonDetailsLoading = (state: RootState) => state.pokemonDetails.isLoading
export const getPokemonDetailsError = (state: RootState) => state.pokemonDetails.error
