import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderHome = styled.header`
  background: url('../img/showcase.jpg') no-repeat center right/cover;
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
    flex-direction: column;
    align-items: center;
  }
`

export const NavItem = styled(Link)`
  display: flex;
  padding: 1rem 1.5rem;
  text-decoration: none;
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
  }
`

//media queries

// @media (max-width: 500px) {

//   #home-a .specials,
//   #home-b .stats,
//   #home-c .process,
//   #about-d .testimonials,
//   #contact-b .contact-info,
//   .items {
//     grid-template-columns: 1fr;
//   }
//   #home-a .specials div {
//     border-bottom: 1px solid #f4f4f4;
//     padding-bottom: 1rem;
//   }
//   #home-a .specials div:last-child {
//     border: none;
//     padding-bottom: 0;
//   }
//   #home-b .stats div {
//     padding: 2rem 0 1rem 0;
//   }
//   #about-a .about-info {
//     grid-template-areas: 'bioimage' 'bio' 'aw1' 'aw2' 'aw3';
//   }
//   #about-c {
//     display: none;
//   }
//   #contact-a .text-fields {
//     grid-template-areas: 'name' 'subject' 'email' 'phone' 'message';
//   }
//   #contact-b div {
//     margin-bottom: 1rem;
//     padding-bottom: 1rem;
//     border-bottom: 1px #555 solid;
//   }
//   #contact-b div:last-child {
//     margin-bottom: 0;
//     padding-bottom: 0;
//     border: none;
//   }
//   #contact-c h1 {
//     font-size: 2rem;
//   }
//   #main-footer {
//     height: 7rem;
//   }
//   #main-footer .footer-content {
//     flex-direction: column;
//     padding: 1rem;
//     height: 5rem;
//   }
// }
