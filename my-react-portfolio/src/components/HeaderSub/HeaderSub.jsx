import React from 'react'
import { NavContainer, NavItem } from '../HeaderMain/Header.styles'
import { HeaderInner } from './HeaderSub.styles'

const HeaderSub = () => {
  return (
    <HeaderInner>
      <div className='container'>
        <NavContainer>
          <img src='img/logo.png' alt='My Portfolio' id='logo' />
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/work'>Work</NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
      </div>
    </HeaderInner>
  )
}

export default HeaderSub
