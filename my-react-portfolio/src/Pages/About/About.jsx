import React from 'react'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import { AboutInfo } from '../../components/AboutInfo/AboutInfo'
import { AboutTech } from '../../components/AboutTech/AboutTech'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'

export const About = () => {
  return (
    <div>
      <HeaderSub />
      <section className='text-center py-3'>
        <Container>
          <SectionTitle></SectionTitle>
          <BottomLine />
          <Lead>Let me tell you a little about myself and what I do...</Lead>
          <AboutInfo />
        </Container>
      </section>
      <AboutTech />

      {/* <!-- Section B: Technologies Figure out what to do here for icons--> */}

      <Footer />
    </div>
  )
}
