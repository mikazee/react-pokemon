import PokemonsComparison from '../../components/PokemonsComparison/PokemonsComparison'
import { useLoaderData } from 'react-router-dom'
import { PokemonDetails } from '../../types'

const handleRemovePokemon = (id: string) => {
  console.log(id)
}

const PokemonsComparisonPage = () => {
  const pokemons = useLoaderData() as PokemonDetails[]
  return <PokemonsComparison pokemons={pokemons} onRemovePokemon={handleRemovePokemon} />
}

export default PokemonsComparisonPage
