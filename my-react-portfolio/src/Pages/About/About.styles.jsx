import styled from 'styled-components'

export const AboutA = styled.section`
  .about-info {
    display: grid;
    grid-template-areas:
      'bioimage bio bio'
      'aw1 aw2 aw3';
    grid-gap: 1.2rem;
  }

  .bio-image {
    grid-area: bioimage;
  }

  .bio {
    grid-area: bio;
    border-left: 3px solid #ffbc00;
    padding: 0.8rem;
  }

  .award-1 {
    grid-area: aw1;
  }

  .award-2 {
    grid-area: aw2;
  }

  .award-3 {
    grid-area: aw3;
  }

  .award-1 .fas,
  .award-2 .fas,
  .award-3 .fas {
    color: #ffbc00;
    margin: 1rem;
  }

  @media (max-width: 500px) {
    .about-info {
      grid-template-areas:
        'bioimage'
        'bio'
        'aw1'
        'aw2'
        'aw3';
    }
  }
`

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
