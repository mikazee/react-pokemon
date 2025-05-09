import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import { useLoaderData } from 'react-router-dom'
import { PokemonDetails } from '../../types'
import Pagination from '../../components/Pagination/Pagination.tsx'

export const PokemonsListPage = () => {
  const pokemons = useLoaderData() as PokemonDetails[]
  return (
    <>
      <PokemonsList pokemons={pokemons} />
      <Pagination />
    </>
  )
}
