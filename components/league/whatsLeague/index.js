import React, { useContext } from 'react'
import { BodyText, TitleH2 } from '../../text'
import styles from './index.module.css'
import { TitleH3 } from '../../text/title'
import StoreContext from '../../../store'
import { THEME } from '../../../constants'

function WhatsLeague() {
  const store = useContext(StoreContext)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <TitleH3>Lig Nedir?</TitleH3>
        <BodyText>
          Üçer kişilik takımlar her ay belirli bir konsept çerçevesinde
          ürün-proje geliştirmek zorundadır.Projeler ay sonunda yapılan Ay
          Finali’nde takımlar tarafından sunulur, her biri bütün lig üyeleri ve
          üç kişilik danışman ekibi tarafından oylanır. Projelerin oylanma
          biçimi, Vamos! Fikir ve Yatırımcılık Ligi’ni özgün ve yenilikçi kılan
          sistemdir. 3 ay boyunca birinci ve ikinci projeler belirlenir, her ay
          iki proje finale gitmeye hak kazanır. 4. ay Final Ayı oynanır:
        </BodyText>
      </div>
      <div className={styles.image}>
        <picture>
          {/*<source media="(min-width:465px)" srcSet="/svg/leagueJourney.svg" />*/}
          <img
            src={
              store.theme === THEME.LIGHT
                ? '/svg/leagueJourney.svg'
                : '/svg/leagueJourneyDark.svg'
            }
            style={{
              width: 'auto',
              height: '100%'
            }}
          />
        </picture>
      </div>
    </div>
  )
}

export default WhatsLeague
