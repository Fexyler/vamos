import React from 'react'

import styles from './index.module.css'

export const Input = ({ type, name, placeholder, ...props }) => {
  return (
    <>
      <input
        type={`${type}`}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}

export const TextArea = ({ name, placeholder, id, ...props }) => {
  return (
    <>
      <textarea name={name} id={id} placeholder={placeholder} {...props} />
    </>
  )
}
