import React from 'react'
import { PokemonDetails } from '../../types'

import PokemonsList from '../PokemonList/PokemonsList.tsx'

type FavoritePokemons = {
  pokemons: PokemonDetails[]
  isFavoriteList: boolean
}

const FavoritePokemonsList: React.FC<FavoritePokemons> = ({ pokemons }) => {
  return <PokemonsList pokemons={pokemons} isFavoriteList />
}

export default FavoritePokemonsList
