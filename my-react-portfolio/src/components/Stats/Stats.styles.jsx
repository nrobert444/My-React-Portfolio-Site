import styled from 'styled-components'

export const StatsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    .stats div {
      padding: 2rem 0 1rem 0;
    }
  }

  li {
    line-height: 2rem;

    &.stats-title {
      font-size: 1.5rem;
    }

    &.stats-number {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  div {
    padding: 3rem 0;

    &:nth-child(odd) {
      background: #f4f4f4;
    }

    &:nth-child(even) {
      background: #ccc;
    }
  }
`
