import React from 'react'

import Index from '../components/sections/nedir'
import { BodyText, TitleH1, TitleH2 } from '../components/text'

export default {
  title: 'Text'
}

export const H1 = () => <TitleH1>Genç. Süper. Üretken.</TitleH1>

export const H2 = () => <TitleH2>Fikir ve Yatırımcılık Ligi</TitleH2>

/*export const TitleH3 = () => <TitleH3></TitleH3>*/

export const Paragraph = () => (
  <BodyText>
    {' '}
    VAMOS!, girişimcilik, inovasyon ve yatırımcılık kavramlarının üçgeninde
    konumlanmış , gerçekleştirdiği her etkinlikte değer ve proje üretmeyi
    hedefleyen, vizyonu ve değerleri projeksiyonunda profesyonel olarak
    çalışmalarını yürüten ve her daim genç kalmayı, genç düşünmeyi ilke edinmiş
    bir öğrenci oluşumudur. Düşünür, keşfeder, tartışır, emek verir ve başarır.
    Günümüz girişimcilik ekosisteminde sürekli yürütülen online eğitim, webinar,
    seminer gibi faaliyetlerin inşa ettiği bariyerleri yıkar ve attığı her
    adımda üretir.
  </BodyText>
)
