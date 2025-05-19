import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import Pagination from '../../components/Pagination/Pagination.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { useEffect } from 'react'
import { fetchPokemons } from '../../store/pokemons/slice.ts'
import { Loader } from '../../components/loader/Loader.tsx'
import ErrorPage from '../error-page'
import { getPokemonsFavFilterList, getPokemonsList } from '../../store/pokemons/selectors.ts'

export const PokemonsListPage = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { isLoading, error, currentPage, totalPages, next, previous } = useSelector(getPokemonsList)

  const filteredPokemons = useSelector(getPokemonsFavFilterList(false))

  useEffect(() => {
    dispatch(fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=20'))
  }, [dispatch])

  const handleNext = () => {
    if (next && !isLoading) {
      dispatch(fetchPokemons(next))
    }
  }

  const handlePrevious = () => {
    if (previous && !isLoading) {
      dispatch(fetchPokemons(previous))
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorPage errorMessage={error} />
  }

  return (
    <>
      <PokemonsList pokemons={filteredPokemons} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  )
}
