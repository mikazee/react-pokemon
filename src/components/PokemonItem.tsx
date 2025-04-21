import React from 'react'
import { Pokemon } from '../types'
import styles from './PokemonItem.module.css'
import { MdFavorite } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'

type Props = {
  pokemon: Pokemon
}

const PokemonItem: React.FC<Props> = ({ pokemon }) => {
  return (
    <li onClick={() => console.log(`${pokemon.name} clicked`)} className={styles.item}>
      <div>
        <h3>
          #{pokemon.id} {pokemon.name}
        </h3>
      </div>
      <div className={styles.actions}>
        <button
          onClick={(e) => {
            e.stopPropagation(), console.log(`${pokemon.name} clicked as Favorite`)
          }}>
          <MdFavorite />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation(), console.log(`${pokemon.name} clicked for Comparison`)
          }}>
          <FaCodeCompare />
        </button>
      </div>
    </li>
  )
}

export default PokemonItem
