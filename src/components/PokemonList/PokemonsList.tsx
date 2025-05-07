import React from 'react'
import styles from './PokemonsList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem.tsx'
import { Pokemon } from '../../types'

type PokemonsListProps = {
  pokemons: Pokemon[]
  isFavoriteList?: boolean
}

// fetch
const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons, isFavoriteList }) => {
  // state
  return (
    <div className={styles.container}>
      <h2>{isFavoriteList && 'Favorite'} Pokemons List</h2>
      <ul className={styles.list}>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}

export default PokemonsList
