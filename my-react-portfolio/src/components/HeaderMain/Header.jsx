import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderHome, NavContainer, NavItem } from './Header.styles'
import Typical from 'react-typical'
import { Lead } from '../Container/Container.style'
import { Container } from '../Container/Container'

const Header = () => {
  return (
    <HeaderHome>
      <Container>
        <NavContainer>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/work'>Work</NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
        <div className='header-content'>
          <h1>Nick Roberto </h1>
          <Lead>
            {' '}
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'Software Developer',
                2000,
                'Technologist',
                2000,
                'Business Owner',
                2000,
                'Father',
                2000,
                'Husband',
                2000,
                'Film Fanatic',
                2000
              ]}
            />
          </Lead>

          <Link to='/work' className='btn-light'>
            View My Work
          </Link>
        </div>
      </Container>
    </HeaderHome>
  )
}

export default Header
