import React from 'react'
import { NavContainer, NavItem } from '../HeaderMain/Header.styles'
import { HeaderInner } from './HeaderSub.styles'
import { Container } from '../Container/Container'

const HeaderSub = () => {
  return (
    <HeaderInner>
      <Container>
        <NavContainer>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/work'>Work</NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
      </Container>
    </HeaderInner>
  )
}

export default HeaderSub
