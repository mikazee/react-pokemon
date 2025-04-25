import React from 'react'
import styles from './ActionButtons.module.css'
import { MdFavorite } from 'react-icons/md'
import { FaCodeCompare } from 'react-icons/fa6'

type Props = {
  onFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void
  onComparison: (e: React.MouseEvent<HTMLButtonElement>) => void
  isFavorite: boolean
  isComparison: boolean
  showText?: boolean
}

const ActionButtons: React.FC<Props> = ({
  onFavorite,
  onComparison,
  isFavorite,
  isComparison,
  showText
}) => {
  return (
    <div className={styles.actions}>
      <button onClick={onFavorite} className={isFavorite ? 'active' : ''}>
        {showText ? 'Add to Favorites' : ''}
        <MdFavorite />
      </button>
      <button onClick={onComparison} className={isComparison ? 'active' : ''}>
        {showText ? 'Compare' : ''}
        <FaCodeCompare />
      </button>
    </div>
  )
}

export default ActionButtons
