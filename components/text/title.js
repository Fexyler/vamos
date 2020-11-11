import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'
import MailForm from '../contact'

function Title({ className, paragraph, h1, children }) {
  return (
    <>
      {h1 && <h1 className={cn(className)}>Coming Soon</h1>}

      {paragraph && (
        <>
          <p className={styles.descript}>
            Yapılış aşamasında. Gelişmelerden haberdar olmak için mail listemize
            kayıt olasanadurasınız.
          </p>
        </>
      )}

      {children}
    </>
  )
}

export default Title
