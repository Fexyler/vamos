import { TitleH3 } from '../../text/title'
import { BodyText } from '../../text'
import React from 'react'
import styles from './index.module.css'

function Kazanims() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <TitleH3>Lig ve Oryantasyon Dönemi’nin Kazanımları Nelerdir?</TitleH3>
      </div>
      <div className={styles.content}>
        <div>
          <BodyText>
            Takımlar, geliştirdikleri start-up fikirlerini oylamaya katılacak
            olan gerçek yatırımcılara ve tecrübeli isimlere sunma imkanı elde
            eder. Takımlar,JA Europe’ın start-up geliştirme programına dahil
            olma şansı yakalar.
            <br />
            <br />
            Lig ülke çapında üniversite öğrencilerini inovasyon ve yatırımcılık
            amacıyla bir araya getirir, girişimci öğrencilerin 5 ay boyunca
            efektif çözümler ve fikirler bulmalarını sağlar. Yaratıcılığı ve
            ekip çalışması kabiliyeti yüksek gençleri yatırımcı ve danışmanlarla
            buluşturur.
            <br />
            <br />
            Lig süresince verilecek çeşitli eğitimler ile katılımcıların farklı
            konularda tecrübe ve bilgi edinmesi sağlanır. Oylama ve Yatırımcılık
            sistemi sayesinde her proje ufak bir pazar araştırmasından geçmiş
            olur. 4 aylık Lig Dönemi boyunca yatırımcılar, kazandıkları miktara
            bağlı olarak ‘Yatırımcı Lig Tablosu’nda yükselme şansı yakalarlar.
            Lig bitiminde en başarılı yatırımcılar, ekstra ödüllere sahip olur.
          </BodyText>
        </div>
        <div>
          <img src="/svg/kazanim.svg" alt="a" />
        </div>
      </div>
    </div>
  )
}

export default Kazanims
