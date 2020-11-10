import React from 'react'
import Nav from '../nav'

import styles from './index.module.css'
import { HamburgerIcon, LogoFont } from '../icons'
import Button from '../button'

function Header() {
  return (
    <header className={styles.header}>
      <LogoFont style={{ height: 33, width: 128 }} />
      <Nav className={styles.nav} />
      <HamburgerIcon className={styles.hamburger} style={{ fontSize: 24 }} />
      <button>Lige Katıl!</button>
    </header>
  )
}

export default Header
