import React from 'react'
import styles from './Header.module.css'
import logo from '../../../public/7.svg'
import ActionButtons from '../button/ActionButtons.tsx'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/pokemons'}>
          <img src={logo} alt="Pokemon GO" />
        </Link>
      </div>

      <ActionButtons
        isNav={true}
        isFavorite={location.pathname === '/favorites'}
        isComparison={location.pathname === '/comparison'}
      />
    </header>
  )
}

export default Header
