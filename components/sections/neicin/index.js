import React from 'react'

import styles from './index.module.css'
import { BodyText, TitleH2 } from '../../text'
import useWindowSize from '../../../hooks'

function Neicin() {
  const size = useWindowSize()
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <TitleH2 className={styles.title}>Ne için?</TitleH2>
        <BodyText className={styles.content}>
          Amacımız, vizyonumuz ve konumlanmamız çerçevesinde değer kabul
          ettiğimiz her bir kavramı geliştirmek ve gençleştirmek için geniş
          çaplı ve uzun soluklu etkinlikler düzenliyor, bizimle aynı değerleri
          benimseyen öğrenciler için kaçış alanı yaratıyoruz.
        </BodyText>
      </div>
      <picture className={styles.image}>
        <source
          media="(min-width:465px)"
          srcSet="/illustrations/neIcinIllustration.svg"
        />
        <img
          src="/illustrations/neIcinIllustrationMobile.svg"
          style={{
            width: size.width > 465 ? 'auto' : size.width,
            height: '100%'
          }}
        />
      </picture>
    </article>
  )
}

export default Neicin
