import React, { useContext } from 'react'

import styles from './index.module.css'
import { Logo } from '../icons'
import { BodyText } from '../text'
import { TitleH3 } from '../text/title'
import SocialIcons from '../socialicons'
import Nav from '../nav'
import Form from '../form/form'
import { THEME } from '../../constants'
import Button from '../button'
import StoreContext from '../../store'

function Footer() {
  const store = useContext(StoreContext)
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <div>
          <Logo width={144} height={44} />
        </div>
        <div>
          <TitleH3 className={styles.motto}>Genç. Süper. Üretken.</TitleH3>
        </div>
        <div className={styles.icons}>
          <SocialIcons />
        </div>
      </div>

      <div className={styles.nav}>
        <BodyText style={{ fontFamily: 'Inter', paddingBottom: 10 }}>
          <b>Hızlı Bağlantılar</b>
        </BodyText>
        <Nav className={styles.footernav} />
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

      <div className={styles.news}>
        <BodyText style={{ fontFamily: 'Inter', paddingBottom: 10 }}>
          <b>Bülten</b>
        </BodyText>
        <Form className={styles.newsform} twoFacts />
      </div>
    </footer>
  )
}

export default Footer
