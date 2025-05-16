import PokemonDetails from '../../components/PokemonDetails/PokemonDetails.tsx'
import { useLoaderData } from 'react-router-dom'
import { mockPokemons } from '../../data/pokemonsData.tsx'

export const pokemonDetailsLoader = () => {
  const pokemon = mockPokemons
  if (!pokemon) {
    throw new Error('No pokemon found')
  }
  return pokemon
}

const PokemonDetailsPage = () => {
  const pokemon = useLoaderData() as PokemonDetails

  return <PokemonDetails pokemon={pokemon} />
}

export default PokemonDetailsPage
