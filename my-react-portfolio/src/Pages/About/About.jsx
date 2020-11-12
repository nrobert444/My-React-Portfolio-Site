import React from 'react'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { AboutInfo } from '../../components/AboutInfo/AboutInfo'
import { AboutTech } from '../../components/AboutTech/AboutTech'

export const About = () => {
  return (
    <div>
      <HeaderSub />
      <AboutInfo />
      <AboutTech />
      <Footer />
    </div>
  )
}
