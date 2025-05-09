import React from 'react'
import { Pokemon } from '../../types'

import PokemonsList from '../PokemonList/PokemonsList.tsx'

type FavoritePokemons = {
  pokemons: Pokemon[]
  isFavoriteList: boolean
}

const FavoritePokemonsList: React.FC<FavoritePokemons> = ({ pokemons }) => {
  return <PokemonsList pokemons={pokemons} isFavoriteList />
}

export default FavoritePokemonsList
