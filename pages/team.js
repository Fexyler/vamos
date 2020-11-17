import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'
import { TitleH3 } from '../components/text/title'
import { TitleH1, TitleH2 } from '../components/text'

function Team() {
  return (
    <Layout>
      <Head>
        <title>Team</title>
      </Head>
      <TitleH2
        style={{ textAlign: 'center', paddingBottom: 100, paddingTop: 100 }}
      >
        Bizim Takım!
      </TitleH2>
      <Card />
      <Footer />
    </Layout>
  )
}

export default Team
