import React from 'react'
import { TechGrid, Buffer } from './AboutTech.styles'
import { Container } from '../../components/Container/Container'
import { TechLogoContainer } from '../TechLogoContainer/TechLogoContainer'
import { TechSkillContainer } from '../TechSkillContainer/TechSkillContainer'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'

export const AboutTech = () => {
  return (
    <>
      <Container>
        <SectionTitle>Technologies</SectionTitle>
        <BottomLine />
      </Container>
      <TechGrid className='bg-dark py-3'>
        <TechSkillContainer />
        <TechLogoContainer />
      </TechGrid>
      <Buffer />
    </>
  )
}
