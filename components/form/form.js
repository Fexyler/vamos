import React, { useState } from 'react'
import Button from '../button'

import styles from './index.module.css'
import { useForm } from 'react-hook-form'

import { TitleH3 } from '../text/title'
import { Input, TextArea } from './input'

function Form({ twoFacts, className }) {
  const [nameValue, setNameValue] = useState()
  const [mailValue, setMailValue] = useState()
  const [messageValue, setMessageValue] = useState()
  const { handleSubmit } = useForm()

  // const paroxy = 'https://cors-anywhere.herokuapp.com/'

  const onSubmit = async (data, e) => {
    const contactData = {
      isim: e.target.isim.value,
      mail: e.target.mail.value,
      mesaj: e.target.mesaj.value
    }
    console.log(contactData)
    await fetch('https://vamosreal.herokuapp.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNvbmRTZWNyZXQiOiJhNWM5ZThjMS03ODc3LTQ1ZWItOTk5MC01YmQ4ZjcyZjA3MWUiLCJpYXQiOjE2MDYyMTY4NTl9.HxQocGHAm7hCOUNzjimj2Z7t5YWbC3arB9g74UCwogM'
      },
      body: JSON.stringify(contactData)
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  if (twoFacts) {
    return (
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.twoinput}>
          <div className={styles.row}>
            <Input
              required
              name="isim"
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name="mail"
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <Button type="submit">Gönder</Button>
        </div>
      </form>
    )
  }

  return (
    <div className={styles.container}>
      <TitleH3>İletişim</TitleH3>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.twoFact}>
          <div className={styles.row}>
            <Input
              required
              name="isim"
              type={'text'}
              placeholder={'Adınız'}
              onChange={(e) => setNameValue(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <Input
              required
              name="mail"
              type={'email'}
              placeholder={'E-mail'}
              onChange={(e) => setMailValue(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <TextArea
            name="mesaj"
            placeholder={'Mesajınız'}
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <Button full type="submit">
            Gönder
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
