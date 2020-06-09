import React from 'react'
import Header from '../../components/HeaderMain/Header'
import { Footer } from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'
import { Specialties } from '../../components/Specialties/Specialties'
import { Process } from '../../components/Process/process'
import { Stats } from '../../components/Stats/Stats'

import {
  BottomLine,
  SectionTitle,
  Lead,
  FormattedSection
} from '../../components/Container/Container.style'

export const Home = () => {
  return (
    <div>
      <Header />
      <FormattedSection>
        <Container>
          <SectionTitle>I Specialize In</SectionTitle>
          <BottomLine />
        </Container>
        <Lead>Full-stack Software development. Add more content.</Lead>
        <Specialties />
      </FormattedSection>

      <FormattedSection>
        <Stats />
      </FormattedSection>

      <FormattedSection>
        <Container>
          <SectionTitle>Process</SectionTitle>
          <BottomLine />
          <Lead>
            All of my UI/UX and design projects are based off of a practiced
            formula to get the result that I am looking for.
          </Lead>
          <Process />
        </Container>
      </FormattedSection>
      <Footer />
    </div>
  )
}
