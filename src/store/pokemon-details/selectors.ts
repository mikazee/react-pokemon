import { RootState } from '../index.ts'
import { getFavoritePokemonState } from '../favorite-pokemons/selectors.ts'
import { getComparedPokemonsState } from '../compare-pokemons/selectors.ts'
import { createSelector } from 'reselect'
import { PokemonWithFavoriteAndCompare } from '../../utils'

const getPokemonDetailsState = (state: RootState) => state.pokemonDetails
export const getPokemonDetailsLoading = (state: RootState) => state.pokemonDetails.isLoading
export const getPokemonDetailsError = (state: RootState) => state.pokemonDetails.error

export const getPokemonDetails = createSelector(
  [getPokemonDetailsState, getFavoritePokemonState, getComparedPokemonsState],
  ({ pokemon }, { list: favList }, { list: compareList }) => {
    return PokemonWithFavoriteAndCompare(pokemon, favList, compareList)
  }
)
