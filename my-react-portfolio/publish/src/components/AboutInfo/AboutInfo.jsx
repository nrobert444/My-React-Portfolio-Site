import React from 'react'
import { AboutInfoStyles } from './AboutInfo.styles'
import { Container } from '../Container/Container'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../Container/Container.style'

export const AboutInfo = () => {
  return (
    <div>
      <section className='text-center py-2 bg-light'>
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <BottomLine />
          <Lead>Let me tell you a little about myself and what I do...</Lead>
          <AboutInfoStyles>
            <img src='img/about-pic.jpg' alt='' className='bio-image' />
            <div className='bio bg-medium'>
              <h4>Your Project Is In Safe Hands</h4>
              <Lead>
               My name is Nicholas Roberto, i'm a full stack JavaScript developer with a specialty in front end UI/UX. I specialize in the 'MERN' stack but have utilized multiple frameworks, libraries and languages to supplement my development. I have a background in entrepreneurship and freelancing that has helped me to quickly aquire the skills needed to be proficient in a short period of time. I have a passion for fitness, films, craft beer and being being a father and husband.
              </Lead>
            </div>
          </AboutInfoStyles>
        </Container>
      </section>
    </div>
  )
}
