import React from 'react'
import { PokemonDetails } from '../../types'
import styles from './PokemonItem.module.css'
import ActionButtons from '../button/ActionButtons.tsx'
import { Link } from 'react-router-dom'

type Props = {
  pokemon: PokemonDetails
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
      <Link className={styles.link} key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            <h3 className={styles.pokemonName}>{pokemon.name}</h3>
            <p className={styles.pokemonId}>#{pokemon.id}</p>
          </div>
          <ActionButtons
            onComparison={onComparison}
            onFavorite={onFavorite}
            isFavorite={pokemon.isFavorite}
            isComparison={pokemon.isComparison}
          />
        </div>
        <img className={styles.pokemonImage} src={pokemon.image} alt="Pokemon image" />
      </Link>
    </li>
  )
}

export default PokemonItem
