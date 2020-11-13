import React from 'react'
import Button from '../button'
import styles from '../hero/index.module.css'

function MailForm({ className }) {
  return (
    <>
      <form action="#">
        <input type="text" placeholder="Email" />
        <Button className={styles.button}>Gönder</Button>
      </form>
    </>
  )
}

export default MailForm
