import { PokemonDetails, PokemonDetailsApiResponse } from '../types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { pokemonDetailsParse } from '../utils'

export const fetchPokemonById = createAsyncThunk<PokemonDetails, number>(
  'pokemon/fetchPokemonById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      if (!response.ok) {
        new Error(`Pokemon with id '${id}' not found`)
      }
      return pokemonDetailsParse((await response.json()) as PokemonDetailsApiResponse)
    } catch (error) {
      console.log(error)
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

export const fetchPokemonFromList = createAsyncThunk<PokemonDetails, number>(
  'comparison/fetchPokemonFromList',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      if (!response.ok) {
        new Error(`Pokemon with id '${id}' not found`)
      }
      return pokemonDetailsParse((await response.json()) as PokemonDetailsApiResponse)
    } catch (error) {
      console.log(error)
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)
