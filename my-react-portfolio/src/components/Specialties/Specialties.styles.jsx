import styled from 'styled-components'

export const Specialize = styled.div`
  margin-top: 3 rem;
  display: grid;
  grid-gap: 1 rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    .specials div {
      border-bottom: 1px solid $light-color;
      padding-bottom: 1rem;

      &:last-child {
        border: none;
        padding-bottom: 0;
      }
    }
  }

  .fas {
    color: #ffbc00;
    padding-bottom: 0.4rem;
  }
`
