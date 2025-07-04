import React from 'react'
import { PokemonListItem } from '../../types'
import styles from './PokemonItem.module.css'
import ActionButtons from '../button/ActionButtons.tsx'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../../store/favorite-pokemons/slice.ts'
import { AppDispatch } from '../../store'
import { fetchPokemonFromList } from '../../services'

type Props = {
  pokemon: PokemonListItem
}

const PokemonItem: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(toggleFavorite(pokemon.id))
  }
  const onComparison = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(fetchPokemonFromList(pokemon.id))
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
