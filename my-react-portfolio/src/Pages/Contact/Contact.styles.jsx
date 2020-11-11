import styled from 'styled-components'

export const ContactA = styled.section`
  & .text-fields {
    display: grid;
    grid-template-areas:
      'name email'
      'subject phone'
      'message message';
    grid-gap: 1.2rem;
    margin-bottom: 1.2rem;

    .name-input {
      grid-area: name;
    }
    .subject-input {
      grid-area: subject;
    }
    .email-input {
      grid-area: email;
    }

    .phone-input {
      grid-area: phone;
    }
    .message-input {
      grid-area: message;
      height: 100px;
    }

    .text-input {
      padding: 0.5rem 1rem;
    }
  }

  button[type='submit'] {
    width: 50%;
  }

  @media (max-width: 500px) {
    .text-fields {
      grid-template-areas:
        'name'
        'subject'
        'email'
        'phone'
        'message';
    }
  }
`

export const ContactB = styled.section`
  & .contact-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    color: black;
  }

  @media (max-width: 500px) {
    .contact-info {
      grid-template-columns: 1fr;
    }
    div {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px #555 solid;

      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border: none;
      }
    }
  }
`

export const ContactC = styled.section`
  & h1 {
    text-align: center;
    font-size: 4rem;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
`
