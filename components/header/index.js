import React from 'react'
import Nav from '../nav'

import styles from './index.module.css'
import { HamburgerIcon, LogoFont } from '../icons'
import Button from '../button'
import Box from '../box'
import IconButton from '../button/icon'

function Header() {
  return (
    <header className={styles.header}>
      <IconButton href="/">
        <LogoFont className={styles.logo} />
      </IconButton>
      <Nav className={styles.nav} />
      <HamburgerIcon className={styles.hamburger} style={{ fontSize: 24 }} />
      <Button href="/coming" primary className={styles.button}>
        Lige Katıl!
      </Button>
    </header>
  )
}

export default Header
