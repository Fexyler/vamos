import React, { useState } from 'react'
import Button from '../button'

import styles from './index.module.css'

import { TitleH3 } from '../text/title'
import { Input, TextArea } from './input'

function Form({ twoFacts, className }) {
  const [nameValue, setNameValue] = useState()
  const [mailValue, setMailValue] = useState()
  const [messageValue, setMessageValue] = useState()

  const data = {
    id: 1,
    name: nameValue,
    mail: mailValue,
    message: messageValue
  }

  const handleSubmit = (e) => {
    fetch('https://vamosreal.herokuapp.com/api/contact', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNvbmRTZWNyZXQiOiJhNWM5ZThjMS03ODc3LTQ1ZWItOTk5MC01YmQ4ZjcyZjA3MWUiLCJpYXQiOjE2MDUzNTM0MDJ9.I-3mcjSP3rcVUY4LdfjHpntOZpXc_ZcIWFRN2X1fx7g',
        'Access-Control-Allow-Origin': 'http://localhost:3000/'
      },
      body: {
        isim: nameValue,
        email: mailValue,
        mesaj: messageValue
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e))
    e.preventDefault()
  }

  if (twoFacts) {
    return (
      <form action="">
        <div className={styles.twoinput}>
          <div className={styles.row}>
            <Input
              required
              name={'name'}
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name={'email'}
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <Button disabled type="submit">
            Gönder
          </Button>
        </div>
      </form>
    )
  }

  return (
    <div className={styles.container}>
      <TitleH3>İletişim</TitleH3>
      <form onSubmit={handleSubmit}>
        <div className={styles.twoFact}>
          <div className={styles.row}>
            <Input
              required
              name={'name'}
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name={'email'}
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <TextArea
            name={'message'}
            placeholder={'Mesajınız'}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <Button disabled full type="submit">
            Gönder
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
