import React from 'react'
import styles from './ActionButtons.module.css'
import { MdFavorite } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

type Props = {
  onFavorite?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onComparison?: (e: React.MouseEvent<HTMLButtonElement>) => void
  isFavorite?: boolean
  isComparison?: boolean
  showText?: boolean
  isNav?: boolean
  favoriteLink?: string
  comparisonLink?: string
}

const ActionButtons: React.FC<Props> = ({
  onFavorite,
  onComparison,
  isFavorite,
  isComparison,
  showText,
  isNav,
  favoriteLink = '/favorites',
  comparisonLink = '/comparison'
}) => {
  const favActiveness = isFavorite ? styles.active : ''
  const compActiveness = isComparison ? styles.active : ''
  if (isNav) {
    return (
      <div className={styles.actions}>
        <NavLink
          to={favoriteLink}
          className={`${styles.button} ${styles.navButton} ${favActiveness}`}>
          Favorites
          <MdFavorite />
        </NavLink>
        <NavLink
          to={comparisonLink}
          className={`${styles.button} ${styles.navButton}  ${compActiveness}`}>
          Comparison
          <FaCodeCompare />
        </NavLink>
      </div>
    )
  }
  return (
    <div className={styles.actions}>
      <button onClick={onFavorite} className={`${styles.button} ${favActiveness}`}>
        {showText ? 'Favorite' : ''}
        <MdFavorite />
      </button>
      <button onClick={onComparison} className={`${styles.button} ${compActiveness}`}>
        {showText ? 'Compare' : ''}
        <FaCodeCompare />
      </button>
    </div>
  )
}

export default ActionButtons
