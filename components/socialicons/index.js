import React from 'react'
import Linkedin from '../icons/Linkedin'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'

import styles from './index.module.css'
import Link from 'next/link'
import Button from '../button'

function SocialIcons() {
  return (
    <div className={styles.icons}>
      <Linkedin />
      <Instagram />
      <Twitter />
    </div>
  )
}

export default SocialIcons
