import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import { useLoaderData } from 'react-router-dom'
import { Pokemon } from '../../types'

export const PokemonsListPage = () => {
  const pokemons = useLoaderData() as Pokemon[]
  return <PokemonsList pokemons={pokemons} />
}
