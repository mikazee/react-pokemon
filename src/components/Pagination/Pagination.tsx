import React from 'react'
import styles from './Pagination.module.css'

const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination}>
      <button>Previous</button>
      <span>Page 1</span>
      <button>Next</button>
    </div>
  )
}
export default Pagination
