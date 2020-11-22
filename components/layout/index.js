import React from 'react'

import styles from './index.module.css'

import Header from '../header'
import Footer from '../footer'
import cn from 'classnames'
import IconButton from '../button/icon'
import { Closed, Instagram, Linkedin } from '../icons'
import Nav from '../nav'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
