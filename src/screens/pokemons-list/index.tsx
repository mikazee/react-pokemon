import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import Pagination from '../../components/Pagination/Pagination.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { useEffect } from 'react'
import { fetchPokemons } from '../../store/pokemons/slice.ts'
import { Loader } from '../../components/loader/Loader.tsx'
import ErrorPage from '../error-page'

export const PokemonsListPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    list,
    currentPage,
    totalPages = 1,
    isLoading,
    error
  } = useSelector((state: RootState) => state.pokemons)

  useEffect(() => {
    dispatch(fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=20'))
  }, [dispatch])

  if (error) {
    return <ErrorPage errorMessage={error} />
  }

  return (
    <>
      {isLoading ? <Loader /> : <PokemonsList pokemons={list} />}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  )
}
