import React from 'react'
import Nav from '../nav'

import styles from './index.module.css'
import { HamburgerIcon, LogoFont } from '../icons'
import Button from '../button'
import Box from '../box'

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <LogoFont className={styles.logo} />
      </div>
      <Nav className={styles.nav} />
      <HamburgerIcon className={styles.hamburger} style={{ fontSize: 24 }} />
      <Button className={styles.button}>Lige Katıl!</Button>
    </header>
  )
}

export default Header
