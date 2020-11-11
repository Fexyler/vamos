import React from 'react'
import Button from '../button'
import styles from '../hero/index.module.css'

function MailForm({ className }) {
  return (
    <div className={styles.input}>
      <form action="#">
        <input type="text" placeholder="Email" />
        <Button className={styles.button}>Gönder</Button>
      </form>
    </div>
  )
}

export default MailForm
