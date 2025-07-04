import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonListItem, PokemonsListApiResponse } from '../../types'

type PokemonState = {
  count: number
  next: string | null
  previous: string | null
  list: PokemonListItem[]
  isLoading: boolean
  error: string | null
  currentPage: number
  totalPages: number
}

const initialState: PokemonState = {
  count: 0,
  next: null,
  previous: null,
  list: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1
}

export const fetchPokemons = createAsyncThunk(
  'pokemons/getPokemonsList',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

export const pokemonsListSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<PokemonsListApiResponse>) => {
        state.isLoading = false
        state.count = action.payload.count
        state.next = action.payload.next
        state.previous = action.payload.previous

        state.list = action.payload.results.map((pokemon) => {
          const id = parseInt(pokemon.url.split('/').slice(-2, -1)[0])
          return {
            id,
            name: pokemon.name,
            url: pokemon.url,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          }
        })
        if (action.payload.previous) {
          const offset = new URL(action.payload.previous).searchParams.get('offset')
          state.currentPage = offset ? parseInt(offset) / 20 + 2 : 1
        } else {
          state.currentPage = 1
        }

        state.totalPages = Math.ceil(action.payload.count / 20)
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        state.list = []
      })
  }
})
