import React from 'react'
import styles from './ActionButtons.module.css'
import { MdFavorite } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

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
  if (isNav) {
    return (
      <div className={styles.actions}>
        <NavLink
          to={favoriteLink}
          className={`${styles.button} ${styles.navButton} ${isFavorite ? styles.active : ''}`}>
          Favorites
          <MdFavorite />
        </NavLink>
        <Link
          to={comparisonLink}
          className={`${styles.button} ${styles.navButton}  ${isComparison ? styles.active : ''}`}>
          Comparison
          <FaCodeCompare />
        </Link>
      </div>
    )
  }
  return (
    <div className={styles.actions}>
      <button
        onClick={onFavorite}
        className={`${styles.button} ${isFavorite ? styles.active : ''}`}>
        {showText ? 'Favorite' : ''}
        <MdFavorite />
      </button>
      <button
        onClick={onComparison}
        className={`${styles.button} ${isComparison ? styles.active : ''}`}>
        {showText ? 'Compare' : ''}
        <FaCodeCompare />
      </button>
    </div>
  )
}

export default ActionButtons
