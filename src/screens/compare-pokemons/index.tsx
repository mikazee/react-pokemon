import PokemonsComparison from '../../components/PokemonsComparison/PokemonsComparison'
import { useDispatch, useSelector } from 'react-redux'
import { getComparedPokemonsSelector } from '../../store/compare-pokemons/selectors.ts'
import { AppDispatch } from '../../store'
import { removePokemon } from '../../store/compare-pokemons/slice.ts'

const PokemonsComparisonPage = () => {
  const comparedPokemons = useSelector(getComparedPokemonsSelector)
  const dispatch = useDispatch<AppDispatch>()

  const handleRemovePokemon = (id: number) => {
    dispatch(removePokemon(id))
  }

  return <PokemonsComparison pokemons={comparedPokemons} onRemovePokemon={handleRemovePokemon} />
}

export default PokemonsComparisonPage
