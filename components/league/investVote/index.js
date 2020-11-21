import React, { useContext } from 'react'
import { TitleH3 } from '../../text/title'
import { BodyText } from '../../text'
import StoreContext from '../../../store/index'
import { THEME } from '../../../constants'
import styles from './index.module.css'

function InvestVote() {
  const store = useContext(StoreContext)

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <TitleH3>Yatırımcılar Normal Bir Ayda Nasıl Oylama Yapar?</TitleH3>
      </div>
      <div className={styles.text1}>
        <BodyText>
          Örneğin: 10 adet takım bulunduran bir ligdesiniz.9 krediniz var. Kendi
          projeniz hariç B , C ve E projelerinde potansiyel gördünüz ve bununla
          beraber en çok yatırımı B projesine yapmaya karar verdiniz. Yatırım
          stratejimiz şöyle olsun:
        </BodyText>
      </div>
      <div className={styles.images}>
        <img src="/svg/AProject.svg" alt="a" />
        <img src="/svg/BProject.svg" alt="a" />
        <img src="/svg/CProject.svg" alt="a" />
        <img src="/svg/DProject.svg" alt="a" />
        <img src="/svg/EProject.svg" alt="a" />
        <img src="/svg/FProject.svg" alt="a" />
      </div>
      <div className={styles.text2}>
        <BodyText>
          Varsayalım ki doğru tercihi yaptınız ve B projesi lig yatırımcıları ve
          danışmanlardan toplamda en fazla yatırım alarak ayın galibi oldu.
          Sisteme bakıldığında B projesine toplamda 35 kredi yatırım yapılmış
          olduğu belirlendi. Kural gereği 510 TL proje ekibinin olur, 490 TL ise
          35 kredi arasında projenin yatırımcılarına yatırdıkları kredi oranında
          paylaştırılır. (Pay dağıtımı yapılırken üç kişilik danışman ekibinin
          yatırımları toplam hesaptan çıkarılır, pay dağıtımı yalnız lig üyeleri
          arasındadır.) <br />
          (B Projesine 5 kredi yatırmıştınız , 490 TL’nin 5/35’i yani 70 TL’si
          sizin.)
        </BodyText>
      </div>
      <div>
        <img
          src={
            store.theme === THEME.LIGHT
              ? '/svg/investVote.svg'
              : '/svg/investVoteDark.svg'
          }
          alt=""
        />
      </div>
    </div>
  )
}

export default InvestVote
