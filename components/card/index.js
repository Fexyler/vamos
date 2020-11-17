import React from 'react'

import styles from './index.module.css'

import { DATA } from '../../constants/index'
import IconButton from '../button/icon'
import { Linkedin } from '../icons'
import Instagram from '../icons/Instagram'
import { TitleH3 } from '../text/title'
import { BodyText } from '../text'

function Card() {
  return (
    <div className={styles.container}>
      {DATA.map((data) => (
        <div key={data.id} className={styles.card}>
          <img src={data.image} />
          <TitleH3 className={styles.name}>{data.name}</TitleH3>
          <BodyText>{data.school}</BodyText>
          <div className={styles.social}>
            {data.social.linkedin.length > 1 && (
              <IconButton href={data.social.linkedin} target="_blank">
                <Linkedin />
              </IconButton>
            )}
            {data.social.instagram.length > 1 && (
              <IconButton href={data.social.instagram} target="_blank">
                <Instagram />
              </IconButton>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
