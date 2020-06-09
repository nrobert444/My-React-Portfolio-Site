import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderHome, NavContainer, NavItem } from './Header.styles'

const Header = () => {
  return (
    <HeaderHome>
      <div className='container'>
        <NavContainer>
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/work'>Work</NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
        <div className='header-content'>
          <h1>
            Nick Roberto
            <span
              className='txt-type'
              data-wait='2000'
              data-words='["Software-Dev", "Designer", "Technologist"]'
            ></span>
          </h1>
          <p className='lead'>
            I specialize in full-stack web application development using the
            'MERN' stack.
          </p>
          <Link to='/work' className='btn-light'>
            View My Work
          </Link>
        </div>
      </div>
    </HeaderHome>
  )
}

export default Header
