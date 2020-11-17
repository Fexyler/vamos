import React, { useContext } from 'react'

import Nav from '../nav'
import Button from '../button'
import { Instagram, Linkedin, Logo } from '../icons'
import Form from '../form/form'
import { BodyText } from '../text'
import { TitleH3 } from '../text/title'

import { THEME } from '../../constants'
import StoreContext from '../../store'

import styles from './index.module.css'
import IconButton from '../button/icon'

function Footer({ mobile }) {
  const store = useContext(StoreContext)

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.brand}>
          <Button href="/" className={styles.logo}>
            <Logo width={144} height={44} />
          </Button>
          <TitleH3 className={styles.motto}>Genç. Süper. Üretken.</TitleH3>
          <div className={styles.social}>
            <IconButton
              href="https://www.linkedin.com/company/vamostr/?viewAsMember=true"
              target="_blank"
            >
              <Linkedin />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/vamos.tr/?hl=tr"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </div>
        </div>

        <div className={styles.nav}>
          <BodyText style={{ fontFamily: 'Inter', paddingBottom: 10 }}>
            <b>Hızlı Bağlantılar</b>
          </BodyText>
          <Nav className={styles.footernav} />
          <Button
            className={styles.themeButton}
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
      </div>
    </footer>
  )
}

export default Footer
