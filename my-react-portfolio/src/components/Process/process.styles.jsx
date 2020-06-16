import styled from 'styled-components'

export const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  text-align: left;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const ProcessStep = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 28px;
  background: #ffbc00;
  color: #333;
  border-radius: 50%;
  border: 1px solid lightyellow;
  height: 15px;
  width: 15px;
  line-height: 15px;
  padding: 1rem;
  transition: all 1s;

  &:hover {
    background: #333;
    color: #ffbc00;
  }
`

export const WordContainer = styled.div`
  padding: 2rem;
`

export const ProcessIcon = styled.div`
  border-radius: 50%;
  background: #333;
  color: #fff;
  padding: 2rem;
  width: 70px;
  height: 70px;
  margin: auto;
  line-height: 70px;
  text-align: center;
  position: relative;
  transition: all 1s;

  &:hover {
    background: #ffbc00;
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
`
