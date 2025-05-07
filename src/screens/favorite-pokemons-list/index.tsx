import FavoritePokemonsList from '../../components/FavoritePokemons/FavoritePokemonsList.tsx'
import { useLoaderData } from 'react-router-dom'
import { Pokemon } from '../../types'

export const FavoritePokemonsPage = () => {
  const favoritePokemons = useLoaderData() as Pokemon[]
  return <FavoritePokemonsList pokemons={favoritePokemons} isFavoriteList />
}
