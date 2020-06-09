import styled from 'styled-components'



export const AboutB = styled.section`
  .progress {
    overflow: hidden;
    height: 20px;
    background: #ccc;
    border-radius: 5px;
    margin-bottom: 0.6rem;

    div {
      height: 100%;
      color: #fff;
      text-align: center;
      background: #ffbc00;
    }
  }
`

export const AboutC = styled.section`
  .about-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    img {
      width: 70%;
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`

export const AboutD = styled.section`
  .testimonials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.5rem;

    ul {
      list-style: none;
      margin-top: 1rem;
      display: flex;
      align-items: center;
    }

    p {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    @media (max-width: 500px) {
      #about-d .testimonials {
        grid-template-columns: 1fr;
      }
    }
  }
`
