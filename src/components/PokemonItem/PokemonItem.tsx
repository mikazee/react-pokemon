import React from 'react'
import { Pokemon } from '../../types'
import styles from './PokemonItem.module.css'
import ActionButtons from '../button/ActionButtons.tsx'

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
      <ActionButtons
        onComparison={onComparison}
        onFavorite={onFavorite}
        isFavorite={false}
        isComparison={false}
      />
    </li>
  )
}

export default PokemonItem
