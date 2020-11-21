import React from 'react'
import { TitleH3 } from '../../text/title'
import { BodyText } from '../../text'
import styles from './index.module.css'

function Champ() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <TitleH3>Final Ayı</TitleH3>
        <div>
          <BodyText>
            Final Ayı kazananının yani şampiyonun “sembolik” piyasa değeri 3000
            TL olup pay dağıtımı ve oylama diğer aylardaki gibi olur. Final
            Ayı’nda önceki ay mücadelelerinde finale katılmaya hak kazanmış 6
            proje şampiyonluk için yarışır.
            <br />
            <br />
            Birden fazla projesi finalde olan takımlar diğer ekip üyelerini
            destek için çağırabilir, şampiyonluk halinde projelerinden pay
            teklifi verebilir.(Lig Koordinatörü bilgilendirilerek yapılmak
            zorundadır.)
            <br />
            Final Ayı’nda ekipler projelerini geliştirmeye ve sunum hazırlamaya
            girişir.
          </BodyText>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/svg/champ.svg" alt="" />
      </div>
    </div>
  )
}

export default Champ
