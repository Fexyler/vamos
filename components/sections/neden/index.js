import React from 'react'

import styles from './index.module.css'
import { BodyText, TitleH2 } from '../../text'
import useWindowSize from '../../../hooks'

function Neden() {
  const size = useWindowSize()
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <TitleH2 className={styles.title}>Neden?</TitleH2>
        <BodyText className={styles.content}>
          VAMOS Ekibi olarak biz, girişimcilik ve yatırımcılık kavramlarını
          gençleştirmeyi ve girişimcilik ekosistemine adım atmak isteyen her bir
          üniversite öğrencisine kanal yaratmayı amaçlıyoruz. Mevcut ekosistem
          ile gençler arasında kurduğumuz köprüde ise yalnızca iki taraf arası
          iletişimi sağlamayı değil, köprünün her iki tarafındaki unsurları
          üretim aşamasında ortak ve aktif hale getirmeyi hedefliyoruz.
        </BodyText>
      </div>
      <picture className={styles.image}>
        <source
          media="(min-width:465px)"
          srcSet="/illustrations/nedenIllustration.svg"
        />
        <img
          src="/illustrations/nedenIllustrationMobile.svg"
          style={{
            width: size.width > 465 ? 'auto' : size.width,
            height: '100%'
          }}
        />
      </picture>
    </article>
  )
}

export default Neden
