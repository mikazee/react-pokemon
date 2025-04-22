import React from 'react'
import styles from './Header.module.css'
import logo from '../../public/7.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Pokemon GO" />
      </div>
      <div className={styles.nav}>
        <button onClick={() => console.log('Fav clicked')}>FAVORITES</button>
        <button onClick={() => console.log('Compare clicked')}>COMPARISON</button>
      </div>
    </header>
  )
}

export default Header
