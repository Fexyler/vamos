import React from 'react'
import Nav from '../nav'

import styles from './index.module.css'
import { HamburgerIcon, LogoFont } from '../icons'

function Header() {
  return (
    <header className={styles.header}>
      <LogoFont style={{ height: 33, width: 128 }} />
      <Nav className={styles.nav} />
      <HamburgerIcon style={{ fontSize: 24 }} />
    </header>
  )
}

export default Header
