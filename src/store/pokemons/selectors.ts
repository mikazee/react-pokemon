import { RootState } from '../index.ts'
import { getFavoritePokemonState } from '../favorite-pokemons/selectors.ts'

export const getPokemonsList = (state: RootState) => state.pokemonsList

export const getPokemonsFavFilterList = (favOnly: boolean) => (state: RootState) => {
  const { list: originalList } = getPokemonsList(state)
  const { list: favList } = getFavoritePokemonState(state)

  if (favOnly) {
    return originalList
      .filter((pokemon) => favList.includes(pokemon.id))
      .map((pokemon) => ({ ...pokemon, isFavorite: true }))
  }
  return originalList.map((pokemon) => ({
    ...pokemon,
    isFavorite: favList.includes(pokemon.id)
  }))
}
