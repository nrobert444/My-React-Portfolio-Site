import styled from 'styled-components'

export const TechGrid = styled.section`
  display: grid;
  grid-template-areas: 'AboutTechStyles DivideLine TechLogosContainer';
  grid-gap: 1rem;
`

export const Buffer = styled.div`
  height: 30px;
  width: 100%;
  background: #f4f4f4;
`
export const DivideLine = styled.div`
  height: 10rem;
  width: 2px;
  background: #ffbc00;
  display: flex;
  margin: 1rem auto 0 auto;
`
