import { RootState } from '../index.ts'
import { getFavoritePokemonState } from '../favorite-pokemons/selectors.ts'
import { getComparedPokemonsState } from '../compare-pokemons/selectors.ts'
import { createSelector } from 'reselect'
import { PokemonWithFavoriteAndCompare } from '../../utils'

export const getPokemonsList = (state: RootState) => state.pokemonsList

export const getPokemonsListItems = createSelector(
  [getPokemonsList, getFavoritePokemonState, getComparedPokemonsState],
  ({ list: originalList }, { list: favList }, { list: compareList }) =>
    originalList.map((pokemon) => PokemonWithFavoriteAndCompare(pokemon, favList, compareList))
)

export const getPokemonsListFavItems = createSelector([getPokemonsListItems], (list) =>
  list.filter((p) => p.isFavorite)
)
