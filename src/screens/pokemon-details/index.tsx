import PokemonDetails from '../../components/PokemonDetails/PokemonDetails.tsx'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { setPokemonDetailsError } from '../../store/pokemon-details/slice.ts'
import {
  getPokemonDetails,
  getPokemonDetailsError,
  getPokemonDetailsLoading
} from '../../store/pokemon-details/selectors.ts'
import ErrorPage from '../error-page'
import { Loader } from '../../components/loader/Loader.tsx'
import { fetchPokemonById } from '../../services'
import { toggleFavorite } from '../../store/favorite-pokemons/slice.ts'
import { addPokemonFromDetailsPage } from '../../store/compare-pokemons/slice.ts'

const PokemonDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(getPokemonDetailsLoading)
  const pokemon = useSelector(getPokemonDetails)
  const error = useSelector(getPokemonDetailsError)

  useEffect(() => {
    if (id) {
      dispatch(fetchPokemonById(+id))
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

  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(toggleFavorite(pokemon.id))
  }
  const onComparison = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(addPokemonFromDetailsPage(pokemon))
  }

  return (
    <PokemonDetails
      pokemon={pokemon as PokemonDetails}
      onFavorite={onFavorite}
      onComparison={onComparison}
    />
  )
}

export default PokemonDetailsPage
