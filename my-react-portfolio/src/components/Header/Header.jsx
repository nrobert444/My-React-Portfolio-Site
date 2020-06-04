import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderHome, HeaderInner, NavContainer, NavItem } from './Header.styles'

export const Header = () => {
  return (
    <HeaderHome>
      <div className='container'>
        <NavContainer>
          <img src='img/logo.png' alt='My Portfolio' id='logo' />
          <NavItem to='/'>Home</NavItem>
          <NavItem to='/about'>About</NavItem>
          <NavItem to='/work'>Work</NavItem>
          <NavItem to='/contact'>Contact</NavItem>
        </NavContainer>{' '}
        <div className='header-content'>
          <h1>
            I Am Nick The
            <span
              class='txt-type'
              data-wait='2000'
              data-words='["Software-Dev", "Designer", "Technologist"]'
            ></span>
          </h1>
          <p class='lead'>
            I specialize in full-stack web application development using the
            'MERN' stack.
          </p>
          <a href='work.html' class='btn-light'>
            View My Work
          </a>
        </div>
      </div>
    </HeaderHome>
  )
}
