import styles from './Loader.module.css'
import { FC } from 'react'

type LoaderProps = {
  pagination?: boolean
}

export const Loader: FC<LoaderProps> = ({ pagination = false }) => {
  const spinnerClass = pagination ? styles.spinner : `${styles.spinner} ${styles.default}`
  return (
    <div className={styles.loader}>
      <div className={spinnerClass} />
      {!pagination ? <p>Loading...</p> : ''}
    </div>
  )
}
