import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import Button from '../components/button'
import { THEME } from '../constants'
import { Title } from '../components/text'
import { Coming } from '../components/icons/illustration'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Vamos!</title>
      </Head>

      <Title />
      <Coming style={{ fontSize: 335 }} />
      <form action="#">
        <input type="text" placeholder="Adınız" />
        <button>Gönder</button>
      </form>

      <br />
      <br />
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
