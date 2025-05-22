import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import { useSelector } from 'react-redux'
import { getPokemonsListFavItems } from '../../store/pokemons/selectors.ts'

export const FavoritePokemonsPage = () => {
  const filteredPokemons = useSelector(getPokemonsListFavItems)
  if (filteredPokemons.length === 0) {
    return <p>You don't have a favorite Pokemons</p>
  }
  return <PokemonsList pokemons={filteredPokemons} isFavoriteList />
}
