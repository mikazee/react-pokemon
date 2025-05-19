import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PokemonDetails, PokemonDetailsApiResponse } from '../../types'

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
    stats: []
  },
  isLoading: false,
  error: null
}

export const fetchPokemonById = createAsyncThunk(
  'pokemon/fetchPokemonById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)

      if (!response.ok) {
        new Error(`Pokemon with id '${id}' not found`)
      }

      const data: PokemonDetailsApiResponse = await response.json()
      return {
        id: data.id,
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        height: data.height,
        weight: data.weight,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat
        }))
      }
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

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
