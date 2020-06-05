import styled from 'styled-components'

export const HomeA = styled.section`
  .specials {
    margin-top: 3 rem;
    display: grid;
    grid-gap: 1 rem;
    grid-template-columns: repeat(4, 1fr);

    .fas {
      color: #ffbc00;
      padding-bottom: 0.4rem;
    }
  }
`

export const HomeB = styled.section`
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    & li {
      line-height: 2rem;

      & .stats.title {
        font-size: 1.5rem;
      }

      & .stats.number {
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
  }
`
export const HomeC = styled.section`
  .process {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    text-align: center;

    &-step {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 28px;
      background: #ffbc00;
      color: set-text-color(#ffbc00);
      border-radius: 50%;
      height: 15px;
      width: 15px;
      line-height: 15px;
      padding: 1rem;
      transition: all 1s;
    }

    &-icon {
      border-radius: 50%;
      background: $dark-color;
      color: set-text-color(#333);
      padding: 2rem;
      width: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      position: relative;
      transition: all 1s;

      &:hover {
        background: #ffbc00;
        width: 90px;
        height: 90px;
        line-height: 90px;

        .process-step {
          background: #333;
          color: set-text-color(#333);
        }
      }
    }
  }
`
