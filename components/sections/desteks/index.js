import React, { useContext } from 'react'
import { TitleH3 } from '../../text/title'

import styles from './index.module.css'
import { THEME } from '../../../constants'
import StoreContext from '../../../store'

function Desteks() {
  const store = useContext(StoreContext)
  return (
    <section className={styles.container}>
      <TitleH3>Destekçilerimiz</TitleH3>
      <div className={styles.image}>
        <img
          src={
            store.theme === THEME.LIGHT
              ? '/destek/GencBasariLogo.png'
              : '/destek/GencBasariLogoBeyaz.png'
          }
        />
      </div>
    </section>
  )
}

export default Desteks
