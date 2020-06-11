import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { MainFooter, FooterContent } from './Footer.styles'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <MainFooter>
      <div className='container'></div>
      <FooterContent className='container'>
        <p>Copyright &copy; 2020 All Rights Reserved</p>
        <div className='social'>
          <FontAwesomeIcon className='fab' icon={faTwitter} />
          <FontAwesomeIcon className='fab' icon={faLinkedin} />
          <FontAwesomeIcon className='fab' icon={faEnvelope} />
          <FontAwesomeIcon className='fab' icon={faPhone} />
        </div>
      </FooterContent>
    </MainFooter>
  )
}
