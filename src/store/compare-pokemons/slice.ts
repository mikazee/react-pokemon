import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonDetails } from '../../types'
import { fetchPokemonFromList } from '../../services'
import { toast } from 'react-hot-toast'
import { capitalize } from '../../utils'

export type CompareState = {
  list: PokemonDetails[]
  isLoading: boolean
  error: string | null
}

const initialState: CompareState = {
  list: [],
  isLoading: false,
  error: null
}

const addPokemonCompare: CaseReducer<CompareState, PayloadAction<PokemonDetails>> = (
  state,
  action
) => {
  const existingIndex = state.list.findIndex((p) => p.id === action.payload.id)

  if (existingIndex === -1) {
    if (state.list.length >= 2) {
      toast.error('You can compare only 2 pokemons')
      return
    }
    state.list.push(action.payload)
    toast.success(`${capitalize(action.payload.name)} successfully ADDED to Comparison.`)
  } else {
    state.list.splice(existingIndex, 1)
    toast.success(`${capitalize(action.payload.name)} successfully DELETED from Comparison.`)
  }
}

export const pokemonsCompareSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addPokemonCompare,
    addPokemonFromDetailsPage: (state, action) => {
      addPokemonCompare(state, action)
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((p) => p.id !== action.payload)
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonFromList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPokemonFromList.fulfilled, (state, action) => {
        addPokemonCompare(state, action)
        state.isLoading = false
      })
      .addCase(fetchPokemonFromList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  }
})

export const { removePokemon, addPokemonFromDetailsPage } = pokemonsCompareSlice.actions
