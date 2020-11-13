import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import Button from '../components/button'
import { THEME } from '../constants'
import Hero from '../components/hero'
import {
  Motto,
  Neden,
  Nedir,
  Neicin,
  Projelerimiz
} from '../components/sections'
import League from '../components/sections/league'
import { BodyText, TitleH2 } from '../components/text'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Vamos!</title>
      </Head>

      <Hero />

      <Motto />

      <Nedir />

      <Neden />

      <Neicin />

      <Projelerimiz />

      <League />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          paddingTop: 44
        }}
      >
        <BodyText>Geliştiriyoruz...</BodyText>
      </div>
      {/*<div>
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
      </div>*/}
    </Layout>
  )
}

export default HomePage
