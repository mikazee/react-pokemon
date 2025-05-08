import FavoritePokemonsList from '../../components/FavoritePokemons/FavoritePokemonsList.tsx'
import { useLoaderData } from 'react-router-dom'
import { PokemonDetails } from '../../types'

export const FavoritePokemonsPage = () => {
  const favoritePokemons = useLoaderData() as PokemonDetails[]
  return <FavoritePokemonsList pokemons={favoritePokemons} isFavoriteList />
}
