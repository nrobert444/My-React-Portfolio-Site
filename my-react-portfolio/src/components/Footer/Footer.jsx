import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { MainFooter, FooterContent } from './Footer.styles'

export const Footer = () => {
  return (
    <MainFooter>
      <div className='container'></div>
      <FooterContent className='container'>
        <p>Copyright &copy; 2020 All Rights Reserved</p>
        <div className='social'>
          <FontAwesomeIcon className='fab' icon={faFacebook} />
          <FontAwesomeIcon className='fab' icon={faTwitter} />
          <FontAwesomeIcon className='fab' icon={faInstagram} />
          <FontAwesomeIcon className='fab' icon={faLinkedin} />
        </div>
      </FooterContent>
    </MainFooter>
  )
}
