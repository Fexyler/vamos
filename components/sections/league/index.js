import React from 'react'

import styles from './index.module.css'
import { BodyText, TitleH2 } from '../../text'
import useWindowSize from '../../../hooks'
import Button from '../../button'

function League() {
  const size = useWindowSize()
  return (
    <article className={styles.container}>
      <div className={styles.text}>
        <TitleH2 className={styles.title}>Fikir ve Yatırımcılık Ligi</TitleH2>
        <div className={styles.content}>
          <div className={styles.leftText}>
            <BodyText>
              <b> Her ay 1 start-up fikri, her ay 9 yatırım fırsatı...</b>
              Girişimcilik ve Yatırımcılık günümüz iş dünyasının ilgisinin en
              çok yoğunlaştığı bölge. Sayısız Start-Up fikri, milyarlarca dolar
              yatırım, iflaslar, unicornlar, bir gecede dibi görmek ve bir ay
              sonra milyoner olmak… Burası hâlâ yeni bir ekosistem, hem acımasız
              hem talepkar. Karşılığı ise…
            </BodyText>
            <BodyText>
              Dünyanın en büyük firmalarının her biri başarılı olmak için işe
              aynı yerden başlıyorlar: fikir. Her biri düşünüyor, tartışıyor,
              gelişiyor ve başarıyor. Bir roller coastera biniyorlar ancak
              ellerinden yalnızca bir şeyi düşürmüyorlar: fikirlerini.
            </BodyText>
          </div>
          <div className={styles.rightText}>
            <BodyText>
              Vamos! Fikir ve Yatırımcılık Ligi sayesinde katılımcılar, 5 ay
              sonunda tam 50 adet proje fikri üretiyor, her birini belirli bir
              kitleye sunuyor ve ekosistemin profesyonellerine birinci elden
              ulaşma imkanı elde ediyorlar.
            </BodyText>
            <BodyText>
              Bununla beraber katılımcılar yalnızca fikirlerini değil,
              stratejilerini de yarıştırıyor. Karşılarına gelen projelere
              ellerindeki miktarı gözeterek bir yatırım stratejisi uyguluyor,
              kazanıyor veya kaybediyorlar.
            </BodyText>
            <BodyText>
              <b>
                Vamos! Fikir ve Yatırımcılık Ligi yalnız bir yarışma değil;
                girişimciliğin, yatırımcılığın ve başarının yolundaki bir fırsat
                kapısı. Fikirlerin ve dolayısıyla roller coasterın başlama
                noktası.
              </b>
            </BodyText>
          </div>
        </div>
      </div>
      <Button href="/coming" primary>
        Ayrıntılı Bilgi
      </Button>
      <picture className={styles.image}>
        {/*<source
          media="(min-width:465px)"
          srcSet="/illustrations/projelerimizIllustration.svg"
        />*/}
        <img
          src="/illustrations/investLig.svg"
          style={{
            width: 'auto',
            height: '100%'
          }}
        />
      </picture>
    </article>
  )
}

export default League
