import React from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import LeagueHero from '../components/league/leagueHero'
import Goals from '../components/league/goals'
import WhatsLeague from '../components/league/whatsLeague'
import WhatsOYS from '../components/league/whatsOYS'
import InvestVote from '../components/league/investVote'
import Champ from '../components/league/champ'
import WhtInvLeague from '../components/league/whatsInvestLeague'
import Orientation from '../components/league/oriantation'
import Kazanims from '../components/league/kazanim'
import Button from '../components/button'

function League() {
  return (
    <Layout>
      <Head>
        <title>Vamos! Fikir ve Yatırımcılık Ligi</title>
      </Head>
      <LeagueHero />
      <Goals />
      <WhatsLeague />
      <WhatsOYS />
      <InvestVote />
      <Champ />
      <WhtInvLeague />
      <Orientation />
      <Kazanims />
      <Button
        style={{
          height: 170,
          width: 170,
          borderRadius: 999,
          fontSize: 28,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 140,
          fontFamily: 'Inter'
        }}
        primary
        href="https://vamostr.typeform.com/to/kJxGUSPo"
        target="_blank"
      >
        Lige Katıl!
      </Button>
    </Layout>
  )
}

export default League
