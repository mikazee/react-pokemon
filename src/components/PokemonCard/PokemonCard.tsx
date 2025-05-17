import React from 'react'
import { PokemonDetails } from '../../types'
import styles from './PokemonCard.module.css'
import { TbRulerMeasure2 } from 'react-icons/tb'
import { LuWeight } from 'react-icons/lu'

type PokemonCardProps = {
  pokemon: PokemonDetails
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeftSide}>
        <div className={styles.title}>
          <h2 className={styles.pokemonName}>{pokemon.name}</h2>
          <p className={styles.pokemonId}>#{pokemon.id}</p>
        </div>
        <div className={styles.statsContainer}>
          <h3>Stats</h3>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.name}>
                <p>
                  {stat.name}:<strong>{stat.value}</strong>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardRightSide}>
        <div className={styles.pokemonImage}>
          <img src={pokemon.image ? pokemon.image : undefined} alt="Pokemon Image" />
        </div>
        <div className={styles.measurement}>
          <ul>
            <li>
              <TbRulerMeasure2 />
              <p>
                <strong>{pokemon.height} m</strong>
              </p>
            </li>
            <li>
              <LuWeight />
              <p>
                <strong>{pokemon.weight} kg</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
