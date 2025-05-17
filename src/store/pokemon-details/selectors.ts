import { RootState } from '../index.ts'

export const getPokemonDetails = (state: RootState) => state.pokemon.pokemon
export const getPokemonDetailsLoading = (state: RootState) => state.pokemon.isLoading
export const getPokemonDetailsError = (state: RootState) => state.pokemon.error
