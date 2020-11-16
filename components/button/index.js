import React from 'react'
import cn from 'classnames'

import styles from './index.module.css'
import Link from 'next/link'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

function Button({
  full = false,
  children,
  disabled,
  primary,
  className,
  ...props
}) {
  const Comp = props.href ? LinkButton : BaseButton
  return (
    <Comp
      className={cn(
        styles.button,
        full && styles.fullWidth,
        primary && styles.primary,
        disabled && styles.disable,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
