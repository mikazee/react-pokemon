import { RootState } from '../index.ts'
import { createSelector } from 'reselect'

export const getComparedPokemonsState = (state: RootState) => state.pokemonsCompare
export const getComparedPokemonsSelector = createSelector(
  [getComparedPokemonsState],
  (state) => state.list
)
