import React from 'react'
import { BodyText, TitleH2 } from '../../text'
import styles from './index.module.css'
import { TitleH3 } from '../../text/title'

function WhatsOYS() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <TitleH3>Oylama ve Yatırımcılık Sistemi Nedir? </TitleH3>
      </div>
      <div className={styles.content}>
        <BodyText>
          Her ay birinci olan projenin “sembolik” piyasa değeri 1000 TL'dir.
          Takım sayısının bir eksiği kadar kredi hakkı olacak olan lig üyeleri
          aynı zamanda kredilerini oylama için kullanan birer ‘yatırımcı’dır.
          Pay almak istedikleri projeleri göz önünde bulundurarak kredilerini
          istedikleri şekilde dağıtabilirler.
          <br />
          <br />
          Birinci olan projenin sembolik piyasa değeri (1000 TL)nin % 51’i fikir
          sahibi takımın olup kalan %49 o projeye oy veren ‘yatırımcı’lar
          tarafından paylaşılacaktır. İkinci olan projenin herhangi bir sembolik
          piyasa değeri yoktur, yalnızca finale çıkma hakkı vardır.
        </BodyText>
        <div>
          <picture>
            <img
              src="/svg/oylama.svg"
              style={{
                width: 'auto',
                height: '100%'
              }}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default WhatsOYS
