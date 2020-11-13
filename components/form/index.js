import React, { useEffect } from 'react'
import Button from '../button'
import styles from '../hero/index.module.css'

function Form({ className }) {
  useEffect(() => {
    const input = document.getElementById('input')
    input.addEventListener('keyup', function (e) {
      if (e.keyCode == 13) {
        e.preventDefault()
        document.getElementById('button').click()
      }
    })
  })
  return (
    <div>
      <form action="#">
        <input type="text" placeholder="İsim" />
        <input id="input" type="text" placeholder="Email" />
        <textarea placeholder="Mesaj" />
        <Button
          id="button"
          onClick={() => alert('tıkladın')}
          className={styles.button}
        >
          Gönder
        </Button>
      </form>
    </div>
  )
}

export default Form
