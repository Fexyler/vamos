import React from 'react'

import Button from '../button'
import { TitleH1 } from '../text'
import IconButton from '../button/icon'
import { IconLogo, Instagram, Linkedin } from '../icons'

import styles from './index.module.css'

function Hero({ ...props }) {
  return (
    <div className={styles.hero} {...props}>
      <div className={styles.descript}>
        <TitleH1>Genç. Süper. Üretken.</TitleH1>
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
      <div className={styles.logocuk}>
        <IconLogo className={styles.logo} />
      </div>
      <Button
        href="https://vamostr.typeform.com/to/kJxGUSPo"
        target="_blank"
        primary
        className={styles.button}
      >
        Lige Katıl!
      </Button>
    </div>
  )
}

export default Hero
