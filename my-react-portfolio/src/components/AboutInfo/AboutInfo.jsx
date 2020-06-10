import React from 'react'
import { AboutInfoStyles } from './AboutInfo.styles'
import { Container } from '../Container/Container'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'

export const AboutInfo = () => {
  return (
    <div>
      <section className='text-center py-3 bg-light'>
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <BottomLine />
          <Lead>Let me tell you a little about myself and what I do...</Lead>
          <AboutInfoStyles>
            <img src='img/about-pic.jpg' alt='' className='bio-image' />
            <div className='bio bg-medium'>
              <h4>Your Project Is In Safe Hands</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
                nesciunt unde nihil voluptatum commodi consequuntur molestiae?
                Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
                deserunt!
              </p>
            </div>
          </AboutInfoStyles>
        </Container>
      </section>
    </div>
  )
}
