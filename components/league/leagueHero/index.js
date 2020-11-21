import React, { useContext } from 'react'
import styles from './index.module.css'
import { TitleH1 } from '../../text'
import Button from '../../button'
import useWindowSize from '../../../hooks'
import StoreContext from '../../../store'
import { THEME } from '../../../constants'

function LeagueHero() {
  const size = useWindowSize()
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      <TitleH1 className={styles.title}>Fikir ve Yatırımcılık Ligi</TitleH1>

      <picture className={styles.image}>
        <source
          media="(min-width:465px)"
          srcSet={
            store.theme === THEME.LIGHT
              ? '/svg/leagueHero.svg'
              : '/svg/leagueHeroDark.svg'
          }
        />
        <img
          src={
            store.theme === THEME.LIGHT
              ? '/svg/leagueHeroMobile.svg'
              : '/svg/leagueHeroMobileDark.svg'
          }
          style={{
            width: size.width > 465 ? 'auto' : size.width,
            height: '100%'
          }}
        />
      </picture>
      <Button className={styles.button} primary>
        Katıl!
      </Button>
    </div>
  )
}

export default LeagueHero
