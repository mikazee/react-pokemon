import React from 'react'
import styles from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem.tsx'
import { Pokemon } from '../../types'

type PokemonListProps = {
  pokemons: Pokemon[]
}

// fetch
const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  // state
  return (
    <div className={styles.container}>
      <h2>Pokemons List</h2>
      <ul className={styles.list}>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
