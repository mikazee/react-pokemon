import React from 'react'
import { Pokemon } from '../types'
import styles from './PokemonItem.module.css'
import { MdFavorite } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'

type Props = {
  pokemon: Pokemon
}

const PokemonItem: React.FC<Props> = ({ pokemon }) => {
  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    console.log(`${pokemon.name} clicked as Favorite`)
  }
  const onComparison = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    console.log(`${pokemon.name} clicked for Comparison`)
  }
  return (
    <li onClick={() => console.log(`${pokemon.name} clicked`)} className={styles.item}>
      <div>
        <h3>
          #{pokemon.id} {pokemon.name}
        </h3>
      </div>
      <div className={styles.actions}>
        <button onClick={onFavorite}>
          <MdFavorite />
        </button>
        <button onClick={onComparison}>
          <FaCodeCompare />
        </button>
      </div>
    </li>
  )
}

export default PokemonItem
