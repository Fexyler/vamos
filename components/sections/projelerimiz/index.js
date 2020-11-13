import React from 'react'

import styles from './index.module.css'
import { BodyText, TitleH2 } from '../../text'
import useWindowSize from '../../../hooks'

function Projelerimiz() {
  const size = useWindowSize()
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <TitleH2 className={styles.title}>Projelerimiz</TitleH2>
        <BodyText className={styles.content}>
          VAMOS!’un yola çıkış hedeflerinin gerçekleştirilmesinde büyük rol
          oynayacak olan Fikir ve Yatırımcılık Ligi’ni üniversite öğrencilerine
          sunmak için uzun süredir çalışıyoruz.
        </BodyText>
      </div>
      <picture className={styles.image}>
        <source
          media="(min-width:465px)"
          srcSet="/illustrations/projelerimizIllustration.svg"
        />
        <img
          src="/illustrations/projelerimizIllustrationMobile.svg"
          style={{
            width: size.width > 465 ? 'auto' : size.width,
            height: '100%'
          }}
        />
      </picture>
    </article>
  )
}

export default Projelerimiz
