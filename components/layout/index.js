import React from 'react'

import styles from './index.module.css'

import Header from '../header'
import Footer from '../footer'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
