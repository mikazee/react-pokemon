import React from 'react'
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPokemons } from '../../store/pokemons/slice.ts'
import { AppDispatch, RootState } from '../../store'
import { Loader } from '../loader/Loader.tsx'

type PaginationProps = {
  currentPage: number
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { currentPage, totalPages, next, previous, isLoading } = useSelector(
    (state: RootState) => state.pokemons
  )

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

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={!previous || isLoading}>
        Previous
      </button>
      <span>
        {isLoading ? <Loader pagination={true} /> : `Page ${currentPage} of ${totalPages}`}
      </span>
      <button onClick={handleNext} disabled={!next || isLoading}>
        Next
      </button>
    </div>
  )
}
export default Pagination
