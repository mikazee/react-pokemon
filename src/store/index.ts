import { configureStore } from '@reduxjs/toolkit'
import { pokemonsListSlice } from './pokemons/slice.ts'
import { pokemonDetailsSlice } from './pokemon-details/slice.ts'
import { pokemonFavoritesSlice } from './favorite-pokemons/slice.ts'
import { pokemonsCompareSlice } from './compare-pokemons/slice.ts'

const rootReducer = {
  pokemonsList: pokemonsListSlice.reducer,
  pokemonDetails: pokemonDetailsSlice.reducer,
  pokemonsFavorite: pokemonFavoritesSlice.reducer,
  pokemonsCompare: pokemonsCompareSlice.reducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
