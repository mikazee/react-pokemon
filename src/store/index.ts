import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './pokemons/slice.ts'

const rootReducer = {
  pokemons: pokemonsReducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
