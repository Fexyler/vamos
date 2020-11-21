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
    </Layout>
  )
}

export default League
