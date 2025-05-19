import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import { useSelector } from 'react-redux'
import { getPokemonsFavFilterList } from '../../store/pokemons/selectors.ts'

export const FavoritePokemonsPage = () => {
  const filteredPokemons = useSelector(getPokemonsFavFilterList(true))
  if (filteredPokemons.length === 0) {
    return <h3>You don't have a favorite Pokemons</h3>
  }
  return <PokemonsList pokemons={filteredPokemons} isFavoriteList />
}
