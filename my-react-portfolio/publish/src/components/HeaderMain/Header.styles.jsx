import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderHome = styled.header`
  background: url('../img/herobridge2.jpg') no-repeat center right/cover;
  height: 100vh;
  color: #fff;

  & .header-content {
    text-align: center;
    padding-top: 20%;
    & h1 {
      font-size: 4rem;
      line-height: 1.2;
    }
  }

  @media (max-width: 800px) {
    height: 30rem;
    & .header-content {
      padding-top: 5rem;
    }
  }

  @media (max-width: 500px) {
    height: 10rem;
    border-bottom: 3px solid #ffbc00;
    background-position: 20% 30%;

    & .header-content {
      display: none;
    }
  }

  @media (max-height: 580px) {
    & .header-content {
      padding-top: 3rem;
    }
  }

  @media (max-height: 330px) {
    & .header-content {
      & h1 {
        font-size: 2rem;
      }
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
  }
`

export const NavItem = styled(Link)`
  padding: 1rem 1.5rem;
  color: #fff;
  text-transform: uppercase;
  border-bottom: 3px transparent solid;
  padding-bottom: 0.5rem;
  transition: border-color 0.5s;
  &:hover {
    border-color: #ccc;
  }

  @media (max-width: 500px) {
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }
`
