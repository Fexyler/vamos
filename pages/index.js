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
import Form from '../components/form/form'
import Footer from '../components/footer'

function HomePage() {
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

      <Form />

      {/*    <Footer />*/}
    </Layout>
  )
}

export default HomePage
