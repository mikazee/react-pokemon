import PokemonDetails from '../../components/PokemonDetails/PokemonDetails.tsx'
import { useLoaderData } from 'react-router-dom'

const PokemonDetailsPage = () => {
  const pokemon = useLoaderData() as PokemonDetails

  return <PokemonDetails pokemon={pokemon} />
}

export default PokemonDetailsPage
