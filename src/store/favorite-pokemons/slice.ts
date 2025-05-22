import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonListItem } from '../../types'

export type FavoriteStates = {
  list: PokemonListItem['id'][]
}

const initialState: FavoriteStates = {
  list: []
}

export const pokemonFavoritesSlice = createSlice({
  name: 'favorite-pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<PokemonListItem['id']>) => {
      const indexOf = state.list.indexOf(action.payload)
      if (indexOf === -1) {
        state.list.push(action.payload)
      } else {
        state.list.splice(indexOf, 1)
      }
    }
  }
})

export const { toggleFavorite } = pokemonFavoritesSlice.actions
