import PokemonDetails from '../../components/PokemonDetails/PokemonDetails.tsx'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { mockPokemons } from '../../data/pokemonsData.tsx'

export const pokemonDetailsLoader = ({ params }: LoaderFunctionArgs) => {
  const pokemon = mockPokemons.find((pokemon) => pokemon.id === params.id)
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
