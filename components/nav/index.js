import React from 'react'
import Link from 'next/link'
import { PAGES } from '../../constants'
import cn from 'classnames'

import styles from './index.module.css'

function Nav({ className }) {
  return (
    <nav className={cn(styles.nav, className)}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key]
        return (
          <Link href={PAGE.path} key={`link-${key}`}>
            <a>{PAGE.name}</a>
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
