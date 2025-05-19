import React from 'react'
import styles from './Pagination.module.css'

type Pagination = {
  totalPages: number
  currentPage: number
  handleNext?: () => void
  handlePrevious?: () => void
}

const Pagination: React.FC<Pagination> = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext
}) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}
export default Pagination
