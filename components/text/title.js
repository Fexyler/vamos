import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'

function Title({ className }) {
  return (
    <>
      <>
        <h1 className={cn([styles.h1, className])}>Coming Soon</h1>
      </>
      <>
        <p className={styles.paragraph}>
          Yapılış aşamasında. Gelişmelerden haberdar olmak için mail listemize
          kayıt olasanadurasınız.
        </p>
      </>
    </>
  )
}

export default Title
