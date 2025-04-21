import styles from './App.module.css'
import Header from './components/Header.tsx'
import PokemonList from './components/PokemonList.tsx'
import Pagination from './components/Pagination.tsx'
import { pokemonsList } from './data/pokemonsData.tsx'

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PokemonList pokemons={pokemonsList} />
      <Pagination />
    </div>
  )
}
