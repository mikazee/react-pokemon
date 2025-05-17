import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/slice.ts'
import pokemonDetailsReducer from './pokemon-details/slice.ts'

const rootReducer = {
  pokemons: pokemonsReducer,
  pokemon: pokemonDetailsReducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
