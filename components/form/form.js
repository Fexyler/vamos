import React, { useState } from 'react'
import Button from '../button'

import styles from './index.module.css'

import { TitleH3 } from '../text/title'
import { Input, TextArea } from './input'

function Form({ twoFacts, className }) {
  const [nameValue, setNameValue] = useState()
  const [mailValue, setMailValue] = useState()
  const [messageValue, setMessageValue] = useState()

  const paroxy = 'https://cors-anywhere.herokuapp.com/'

  const postData = (url = process.env.API_URL) => {
    const data = {
      isim: nameValue,
      mail: mailValue,
      mesaj: messageValue
    }
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'auth-token': process.env.API_TOKEN
      },
      body: {
        isim: data.isim,
        email: data.mail,
        mesaj: data.mesaj
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  if (twoFacts) {
    return (
      <form action="">
        <div className={styles.twoinput}>
          <div className={styles.row}>
            <Input
              required
              name={'isim'}
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name={'mail'}
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
      <form>
        <div className={styles.twoFact}>
          <div className={styles.row}>
            <Input
              required
              name={'isim'}
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name={'mail'}
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <TextArea
            name={'mesaj'}
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
