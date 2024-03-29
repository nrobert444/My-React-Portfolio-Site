import styled from 'styled-components'

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
`

export const Item = styled.div`
  position: relative;
  background: #ffbc00;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
    transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);
  }
  //Bring in main color overlay
  &:hover:after {
    transform: scale(2) translateX(0) translateY(0) rotate(-28deg);
  }
`

export const ItemImage = styled.div`
  height: auto;
  transform: translateZ(0);
  display: block;
  transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);

  &:before {
    content: '';
    display: block;
    padding-top: 75%;
    overflow: hidden;
  }

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    line-height: 0;
  }
`

export const ItemText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  transform: translateY(-20%);
  transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
    transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
  transition-delay: 300ms;

  //Bring in text on hover
  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ItemTextWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  & .item-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0 0 0;
  }

  & .item-text-category {
    text-transform: uppercase;
    font-size: 1.2rem;
    opacity: 0.7;
    margin: 0;
  }
`
