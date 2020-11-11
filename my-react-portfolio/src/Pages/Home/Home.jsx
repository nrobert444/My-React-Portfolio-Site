import React from 'react'
import Header from '../../components/HeaderMain/Header'
import { Footer } from '../../components/Footer/Footer'
import { Container } from '../../components/Container/Container'

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
        <Lead>
          Full-stack Software development with a focus on front-end
          technologies. The stack I utilize is MongoDb, Express, NodeJS, and
          React.
        </Lead>
      </FormattedSection>
      <Footer />
    </div>
  )
}
