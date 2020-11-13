import React from 'react'
import { BodyText } from '../../text'

import styles from './index.module.css'
import { LogoFont } from '../../icons'

function Motto() {
  return (
    <section className={styles.motto}>
      <div className={styles.brand}>
        <LogoFont />
      </div>
      <BodyText className={styles.mottotext}>
        “Düşünmek, günümüzde artık sadece insanı diğer canlılardan değil; kendi
        türünden de ayıran derin bir yetenek. Fikir, binlerce yıllık medeniyet
        yolumuzdaki her bir kaldırım taşı. Tartışma, insanın gözünü ilk açtığı
        andan beri bir an olsun bitirmediği bir mücadele ve başarı, modern dünya
        insanının ekmeği, suyu.”{' '}
      </BodyText>
    </section>
  )
}

export default Motto
