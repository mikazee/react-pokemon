import React from 'react'
import type { PokemonDetails } from '../../types'
import PokemonCard from '../PokemonCard/PokemonCard.tsx'
import styles from './PokemonDetails.module.css'
import ActionButtons from '../button/ActionButtons.tsx'

type PokemonDetailsPageProps = {
  pokemon: PokemonDetails
}

const PokemonDetails: React.FC<PokemonDetailsPageProps> = ({ pokemon }) => {
  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    console.log('Favorite clicked')
  }
  const onComparison = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    console.log('Comparison clicked')
  }
  return (
    <div className={styles.container}>
      <PokemonCard pokemon={pokemon} />
      <ActionButtons
        onComparison={onComparison}
        onFavorite={onFavorite}
        isFavorite={false}
        isComparison={false}
        showText
      />
    </div>
  )
}

export default PokemonDetails
