import React from 'react'
import { TitleH3 } from '../../text/title'
import { BodyText } from '../../text'
import styles from './index.module.css'

function WhtInvLeague() {
  return (
    <div className={styles.container}>
      <div>
        <TitleH3>Yatırımcılık Ligi Nedir?</TitleH3>
      </div>
      <div className={styles.content}>
        <div>
          <BodyText>
            Vamos! Fikir ve Yatırımcılık Ligi’nin her bir üyesi aynı zamanda
            bireysel kararlar veren birer yatırımcıdır, kendi kurdukları
            stratejilere göre kazanır veya kaybederler.
            <br />
            <br />4 aylık Lig Dönemi boyunca yatırımcılar, kazandıkları miktara
            bağlı olarak ‘Yatırımcı Lig Tablosu’nda yükselme şansı yakalarlar.
            Lig bitiminde en başarılı yatırımcılar, ekstra ödüllere sahip olur.
          </BodyText>
        </div>
        <div>
          <img src="/svg/investLeague.svg" alt="a" />
        </div>
      </div>
    </div>
  )
}

export default WhtInvLeague
