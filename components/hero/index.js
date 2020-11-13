import React from 'react'

import cn from 'classnames'

import styles from './index.module.css'
import { Title, TitleH1 } from '../text'
import SocialIcons from '../socialicons'
import { IconLogo, Instagram } from '../icons'
import Button from '../button'
import IconButton from '../button/icon'

/*className={styles.title}*/
/*className={styles.hero}*/

function Hero({ title, social, form, description }) {
  return (
    <div className={styles.hero}>
      <div className={styles.descript}>
        <TitleH1>Genç. Süper. Üretken.</TitleH1>
        <SocialIcons />
      </div>
      <div className={styles.logocuk}>
        <IconLogo className={styles.logo} />
      </div>
      <Button className={styles.button}>Lige Katıl!</Button>
    </div>
  )
}

export default Hero
