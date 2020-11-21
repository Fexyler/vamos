import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'
import Footer from '../components/footer'
import { BodyText, TitleH1 } from '../components/text'
import { Coming } from '../components/icons/illustration'
import Button from '../components/button'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Geliyoruz!</title>
      </Head>

      <div className="coming-container">
        <TitleH1>Geliyoruz!</TitleH1>
        <BodyText>Sayfayı hazırlamaktayız. Çok yakında yayındayız!</BodyText>
        <Button style={{ marginTop: 20 }} primary href="/">
          Ana Sayfa
        </Button>
        <div>
          <Coming className="hero-coming" />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
