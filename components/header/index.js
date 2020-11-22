import React, { useEffect, useState } from 'react'
import cn from 'classnames'

import { LogoFont } from '../icons'
import Button from '../button'
import Nav from '../nav'

import styles from './index.module.css'

function Header() {
  const [scroll, setScroll] = useState({ scrollY: undefined })

  useEffect(() => {
    function handleResize() {
      setScroll({
        scrollY: window.pageYOffset
      })
    }
    window.addEventListener('scroll', handleResize)
    handleResize()
    return () => window.removeEventListener('scroll', handleResize)
  }, [])

  return (
    <header
      className={cn(
        styles.header,
        scroll.scrollY > 0 ? styles.actives : styles.disabled
      )}
    >
      <Button href="/">
        <LogoFont className={styles.logo} />
      </Button>
      <Nav className={styles.nav} />
      <Button
        href="https://vamostr.typeform.com/to/kJxGUSPo"
        target="_blank"
        primary
        className={styles.button}
      >
        Lige Katıl!
      </Button>
    </header>
  )
}

export default Header
