import React from 'react'

import styles from './index.module.css'

import Header from '../header'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
