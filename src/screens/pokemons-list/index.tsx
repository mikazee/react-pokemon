import PokemonsList from '../../components/PokemonList/PokemonsList.tsx'
import Pagination from '../../components/Pagination/Pagination.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { useEffect } from 'react'
import { fetchPokemons } from '../../store/pokemons/slice.ts'
import { Loader } from '../../components/loader/Loader.tsx'
import ErrorPage from '../error-page'
import { getPokemonsListItems, getPokemonsList } from '../../store/pokemons/selectors.ts'
// import { Toaster } from 'react-hot-toast'

export const PokemonsListPage = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { isLoading, error, currentPage, totalPages, next, previous } = useSelector(getPokemonsList)

  const filteredPokemons = useSelector(getPokemonsListItems)

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
      {/*<Toaster*/}
      {/*  position="top-center"*/}
      {/*  toastOptions={{*/}
      {/*    duration: 3000,*/}
      {/*    style: {*/}
      {/*      background: '#363636',*/}
      {/*      color: '#fff'*/}
      {/*    }*/}
      {/*  }}*/}
      {/*/>*/}
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
