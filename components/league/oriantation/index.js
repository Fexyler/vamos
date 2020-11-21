import React from 'react'
import { TitleH3 } from '../../text/title'
import { BodyText } from '../../text'
import styles from './index.module.css'

function Orientation() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <TitleH3>Oryantasyon Dönemi</TitleH3>
        <div>
          <BodyText>
            Oryantasyon Dönemi , programa katılmak isteyen öğrencileri Lig’e
            alıştırmak ve fikir-proje yaratmak konularında geliştirmek amacıyla
            yürütülecek 1 aylık bir dönemdir.Oryantasyon Dönemi, Vamos! Fikir ve
            Yatırımcılık Ligi’nin demo versiyonu olup Lig Koordinatörlüğü
            Ekibi’nin de organizasyon hakkında tecrübe kazanmasını ve konsepti
            oturtmasını sağlayacaktır.
            <br />
            <br />
            Oryantasyon Dönemi’nin ilk iki haftası “Hızlandırma Süreci” olarak
            adlandırılır. Çeşitli eğitimler ve etkinlikler ile öğrencilerin
            Design Thinking, Sistemli Düşünme, Business Canvas, Etkili Sunum ve
            Pazarlama Yöntemleri ,Ekip Çalışması ve Liderlik alanlarında yetenek
            kazanmalarına destek olunacaktır.
            <br />
            <br />
            Oryantasyon Dönemi’nde takımların belirli bir soruna çözüm bulmak
            adına proje geliştirmesi istenir. İlgili sorunlarda uzman kişiler
            üyelere eğitimler verir.
          </BodyText>
        </div>
      </div>
      <div className={styles.image}>
        <img src="/svg/oriantation.svg" alt="" />
      </div>
    </div>
  )
}

export default Orientation
