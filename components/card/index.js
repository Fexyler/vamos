import React from 'react'

import styles from './index.module.css'

import { DATA } from '../../constants/index'
import SocialIcons from '../socialicons'

function Card() {
  return (
    <>
      {DATA.map((data) => (
        <div key={data.id}>
          <img src={data.image} />
          <p>{data.name}</p>
          {data.social.map((icon) => (
            <SocialIcons />
          ))}
        </div>
      ))}
    </>
  )
}

export default Card
