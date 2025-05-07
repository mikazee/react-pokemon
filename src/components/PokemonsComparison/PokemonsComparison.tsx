import React from 'react'
import styles from './PokemonsComparison.module.css'
import pokeBall from '../../../public/logo.svg'
import { PokemonDetails } from '../../types'
import { TiDelete } from 'react-icons/ti'
import { TbRulerMeasure2 } from 'react-icons/tb'
import { LuWeight } from 'react-icons/lu'

type CompareProps = {
  pokemons: PokemonDetails[]
  onRemovePokemon: (id: string) => void
}

const PokemonsComparison: React.FC<CompareProps> = ({ pokemons, onRemovePokemon }) => {
  const firstPokemon = pokemons[0]
  const secondPokemon = pokemons[1]
  const stats = firstPokemon.stats

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Compare Pokemons</h2>
      <div className={styles.comparisonTable}>
        <div className={`${styles.pokemonCard} ${styles.firstRowItem}`}>
          <button className={styles.deleteButton} onClick={() => onRemovePokemon(firstPokemon.id)}>
            <TiDelete />
          </button>
          <h3 className={styles.pokemonName}>{firstPokemon.name}</h3>
          <p className={styles.pokemonId}>#{firstPokemon.id}</p>
          <img className={styles.pokemonImage} src={firstPokemon.image} alt={firstPokemon.name} />
        </div>

        <div className={styles.pokeballContainer}>
          <img className={styles.pokeball} src={pokeBall} alt="Pokeball" />
        </div>

        <div className={`${styles.pokemonCard} ${styles.firstRowItem}`}>
          <button className={styles.deleteButton} onClick={() => onRemovePokemon(secondPokemon.id)}>
            <TiDelete />
          </button>
          <h3 className={styles.pokemonName}>{secondPokemon.name}</h3>
          <p className={styles.pokemonId}>#{secondPokemon.id}</p>
          <img className={styles.pokemonImage} src={secondPokemon.image} alt={secondPokemon.name} />
        </div>

        <div className={styles.measurement}>
          <span>{firstPokemon.height} m</span>
        </div>
        <div className={styles.icon}>
          <TbRulerMeasure2 />
        </div>
        <div className={styles.measurement}>
          <span>{secondPokemon.height} m</span>
        </div>

        <div className={`${styles.measurement} ${styles.leftItem}`}>
          <span>{firstPokemon.weight} kg</span>
        </div>
        <div className={styles.icon}>
          <LuWeight />
        </div>
        <div className={`${styles.measurement} ${styles.rightItem}`}>
          <span>{secondPokemon.weight} kg</span>
        </div>

        <div className={styles.divider}></div>

        <div className={`${styles.sectionHeader} ${styles.fullWidth}`}>
          <h3>Stats</h3>
        </div>

        <div className={styles.divider}></div>

        {stats.map((stat, index) => (
          <React.Fragment key={stat.name}>
            <div className={`${styles.statValue} ${styles.leftItem}`}>
              {firstPokemon.stats[index].value}
            </div>
            <div className={styles.statLabel}>{stat.name}</div>
            <div className={`${styles.statValue} ${styles.rightItem}`}>
              {secondPokemon.stats[index].value}
            </div>
          </React.Fragment>
        ))}

        <div className={`${styles.bottomDivider} ${styles.fullWidth}`}></div>
      </div>
    </div>
  )
}

export default PokemonsComparison
