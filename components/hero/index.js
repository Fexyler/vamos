import React from 'react'

import styles from './index.module.css'
import { Title } from '../text'
import { Coming } from '../icons/illustration'
import Layout from '../layout'

function Hero() {
  return (
    <div className={styles.hero}>
      <Title className={[styles.h1, styles.desc]} />
      <Coming style={{ fontSize: 335 }} />
      <form action="#">
        <input type="text" placeholder="Email" />
        <button>Gönder</button>
      </form>
    </div>
  )
}

export default Hero
