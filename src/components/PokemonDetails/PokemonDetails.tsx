import React from 'react'
import type { PokemonDetails } from '../../types'
import PokemonCard from '../PokemonCard/PokemonCard.tsx'
import styles from './PokemonDetails.module.css'
import ActionButtons from '../button/ActionButtons.tsx'

type PokemonDetailsProps = {
  pokemon: PokemonDetails
  onComparison?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onFavorite, onComparison }) => {
  return (
    <div className={styles.container}>
      <PokemonCard pokemon={pokemon} />
      <ActionButtons
        onComparison={onComparison}
        onFavorite={onFavorite}
        isFavorite={pokemon.isFavorite}
        isComparison={pokemon.isComparison}
        showText
      />
    </div>
  )
}

export default PokemonDetails
