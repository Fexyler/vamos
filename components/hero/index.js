import React, { useEffect } from 'react'

import cn from 'classnames'

import styles from './index.module.css'
import { Title } from '../text'
import { Coming } from '../icons/illustration'
import Button from '../button'
import MailForm from '../contact'
import useWindowSize from '../../hooks/index'

function Hero() {
  const size = useWindowSize()
  return (
    <div className={styles.hero}>
      <div className={styles.title}>
        <Title
          children={size.width > 1140 && <MailForm />}
          h1
          paragraph
          className={styles.h1}
        />
      </div>
      <Coming className={styles.illustration} />
      {size.width < 400 && <MailForm />}
    </div>
  )
}

export default Hero
