import styled from 'styled-components'

export const MainFooter = styled.footer`
  background: #333333;
  color: #fff;
  height: 5rem;

  @media (max-width: 500px) {
    height: 7rem;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;

  & .social .fab {
    margin-right: 1rem;
    border: 2px #fff solid;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    line-height: 20px;
    text-align: center;
    padding: 0.5rem;

    &:hover {
      background: #ffbc00;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1rem;
    height: 5rem;
  }
`
export const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited {
    color: white;
  }
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`
