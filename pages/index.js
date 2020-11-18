import React, { useEffect } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import Hero from '../components/hero'
import {
  Motto,
  Neden,
  Nedir,
  Neicin,
  Projelerimiz
} from '../components/sections'
import League from '../components/sections/league'
import Form from '../components/form/form'
import Footer from '../components/footer'
import Desteks from '../components/sections/desteks'

function HomePage() {
  const handleScroll = (e) => {
    const el = e.target
    console.log(el)
  }
  return (
    <Layout>
      <Head>
        <title>Vamos!</title>
      </Head>
      <Hero onScroll={handleScroll} />
      <Motto />
      <Nedir />
      <Neden />
      <Neicin id="what" />
      <Projelerimiz />
      <League />
      <Desteks />
      <Form />
      <Footer />
    </Layout>
  )
}

export default HomePage
