import styled from 'styled-components'

export const TechLogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Icon = styled.div`
  margin: 0.25rem;
`

export const ImageContainer = styled.div`
  height: 100%;

  & img {
    height: 70px;
    width: 70px;
  }
`
