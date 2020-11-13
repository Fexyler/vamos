import React from 'react'

import cn from 'classnames'

import styles from './index.module.css'

export const BodyText = ({ children, className, ...props }) => {
  return (
    <>
      <p className={cn(styles.p, className)} {...props}>
        {children}
      </p>
    </>
  )
}
