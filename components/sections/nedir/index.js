import React from 'react'

import styles from './index.module.css'
import { BodyText, TitleH2 } from '../../text'
import useWindowSize from '../../../hooks'

function Nedir() {
  const size = useWindowSize()
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <TitleH2 className={styles.title}>Nedir?</TitleH2>
        <BodyText className={styles.content}>
          Vamos!; girişimcilik, inovasyon ve yatırımcılık kavramlarının
          üçgeninde konumlanmış , gerçekleştirdiği her etkinlikte değer ve proje
          üretmeyi hedefleyen, vizyonu ve değerleri projeksiyonunda profesyonel
          olarak çalışmalarını yürüten ve her daim genç kalmayı, genç düşünmeyi
          ilke edinmiş bir öğrenci oluşumudur. Düşünür, keşfeder, tartışır, emek
          verir ve başarır. Günümüz girişimcilik ekosisteminde sürekli yürütülen
          online eğitim, webinar, seminer gibi faaliyetlerin inşa ettiği
          bariyerleri yıkar ve attığı her adımda üretir.
        </BodyText>
      </div>
      <picture className={styles.image}>
        <source
          media="(min-width:465px)"
          srcSet="/illustrations/nedirIllustrasyon.svg"
        />
        <img
          src="/illustrations/nedirIllustrasyonMobile.svg"
          style={{
            width: size.width > 465 ? 'auto' : size.width,
            height: '100%'
          }}
        />
      </picture>
    </article>
  )
}

export default Nedir
