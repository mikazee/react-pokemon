import { createSlice } from '@reduxjs/toolkit'
import { PokemonDetails } from '../../types'
import { fetchPokemonById } from '../../services'

type PokemonDetailsState = {
  pokemon: PokemonDetails
  isLoading: boolean
  error: string | null
}

const initialState: PokemonDetailsState = {
  pokemon: {
    id: 0,
    name: '',
    image: '',
    height: 0,
    weight: 0,
    stats: [],
    isFavorite: false,
    isComparison: false
  },
  isLoading: false,
  error: null
}

export const pokemonDetailsSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonDetailsError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPokemonById.fulfilled, (state, action) => {
        state.isLoading = false
        state.pokemon = action.payload
      })
      .addCase(fetchPokemonById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { setPokemonDetailsError } = pokemonDetailsSlice.actions
