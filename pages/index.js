import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import Button from '../components/button'
import { THEME } from '../constants'
import Hero from '../components/hero'
import styles from '../components/hero/index.module.css'
import MailForm from '../components/contact'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Vamos!</title>
      </Head>

      <Hero />

      <br />
      <div>
        Change Theme{' '}
        <Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          {store.theme === THEME.LIGHT ? 'Dark' : 'Light'}
        </Button>
      </div>
    </Layout>
  )
}

export default HomePage
