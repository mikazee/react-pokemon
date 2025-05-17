import PokemonDetails from '../../components/PokemonDetails/PokemonDetails.tsx'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPokemonById, setPokemonDetailsError } from '../../store/pokemon-details/slice.ts'
import {
  getPokemonDetails,
  getPokemonDetailsError,
  getPokemonDetailsLoading
} from '../../store/pokemon-details/selectors.ts'
import ErrorPage from '../error-page'
import { Loader } from '../../components/loader/Loader.tsx'

const PokemonDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const pokemon = useSelector(getPokemonDetails)
  const isLoading = useSelector(getPokemonDetailsLoading)
  const error = useSelector(getPokemonDetailsError)

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonById(id))
    } else {
      dispatch(setPokemonDetailsError('Pokemon not found'))
    }
  }, [dispatch, id])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorPage errorMessage={error} />
  }

  return <PokemonDetails pokemon={pokemon} />
}

export default PokemonDetailsPage
