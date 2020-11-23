import React from 'react'
import { BodyText, TitleH2 } from '../../text'

import styles from './index.module.css'
import { TitleH3 } from '../../text/title'

function Goals() {
  return (
    <div className={styles.container}>
      <TitleH3>
        <u>Neyi amaçlar?</u>
      </TitleH3>
      <br />

      <BodyText className={styles.text}>
        {' '}
        Vamos! Fikir ve Yatırımcılık Ligi;
        <br />
        <br />
        Günümüzün önemli sorunlarına inovatif çözümler getirmek adına “bilişime
        ve teknolojiye” temas eden girişimcilik fikirlerini ortaya çıkarmayı,
        <br />
        <br />
        İnovasyon, girişimcilik ve yatırımcılık kavramlarına hakim, sürekli
        düşünmenin ve üretmenin peşinde koşan üniversite gençleri ile
        ekosistemin tecrübeli isimleri arasında köprü kurmayı,
        <br />
        <br />
        Girişimciliğe adım atma ve yenilikçi fikirler yaratma konularında
        ihtiyaç duyulan bilgi, yetenek ve tecrübe setlerini üniversite
        öğrencilerine aktarmayı,
        <br />
        <br />
        amaçlar.
      </BodyText>
    </div>
  )
}

export default Goals
