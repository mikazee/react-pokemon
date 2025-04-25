import styles from './App.module.css'
import Header from './components/Header/Header.tsx'
// import PokemonList from './components/PokemonList/PokemonList.tsx'
// import Pagination from './components/Pagination/Pagination.tsx'
// import { pokemonsList } from './data/pokemonsData.tsx'
import PokemonDetailsPage from './components/PokemonDetails/PokemonDetailsPage.tsx'
import { mockPokemon } from './data/pokemonsData.tsx'

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <PokemonDetailsPage pokemon={mockPokemon} />
      {/*<PokemonList pokemons={pokemonsList} />*/}
      {/*<Pagination />*/}
    </div>
  )
}
