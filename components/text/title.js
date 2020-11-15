import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'

export const TitleH1 = ({ children, className, ...props }) => {
  return (
    <>
      <h1 className={cn(styles.h1, className)} {...props}>
        {children}
      </h1>
    </>
  )
}

export const TitleH2 = ({ children, className, ...props }) => {
  return (
    <>
      <h2 className={cn(styles.h2, className)} {...props}>
        {children}
      </h2>
    </>
  )
}

export const TitleH3 = ({ children, className, ...props }) => {
  return (
    <>
      <h3 className={cn(styles.h3, className)} {...props}>
        {children}
      </h3>
    </>
  )
}
