import React from 'react'
import styles from './PokemonsList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem.tsx'
import { PokemonListItem } from '../../types'

type PokemonsListProps = {
  pokemons: PokemonListItem[]
  isFavoriteList?: boolean
}

const PokemonsList: React.FC<PokemonsListProps> = ({ pokemons, isFavoriteList }) => {
  // state
  return (
    <div className={styles.container}>
      <h2>{isFavoriteList && 'Favorite'} Pokemons List</h2>
      <ul className={styles.list}>
        {pokemons.map((pokemon: PokemonListItem) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}

export default PokemonsList
