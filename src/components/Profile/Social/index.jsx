import React from 'react'

import IconTwitter from '../../../images/icons/twitter.svg'
import IconFacebook from '../../../images/icons/facebook.svg'
import IconInstagram from '../../../images/icons/instagram.svg'
import IconLinkedin from '../../../images/icons/linkedin.svg'
import IconWeb from '../../../images/icons/web.svg'

import './styles.scss'

const socialMedia = [
  {
    icon: <IconTwitter />,
    link: 'https://google.com.br',
  },
  {
    icon: <IconFacebook />,
    link: 'https://google.com.br',
  },
  {
    icon: <IconInstagram />,
    link: 'https://google.com.br',
  },
  {
    icon: <IconLinkedin />,
    link: 'https://google.com.br',
  },
  {
    icon: <IconWeb />,
    link: 'https://google.com.br',
  }
]

export default function Social() {
  return (
    <div className="social">
      {socialMedia.map((item, index) => (
        <a 
          href={item.link} 
          key={index} 
          rel="noreferrer noopener"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}