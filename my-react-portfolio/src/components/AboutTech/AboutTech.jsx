import React from 'react'
import { AboutTechStyles } from './AboutTech.styles'
import { Container } from '../../components/Container/Container'
import Typical from 'react-typical'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'

export const AboutTech = () => {
  return (
    <div>
      <section className='bg-dark py-3'>
        <Container>
          <SectionTitle></SectionTitle>
          <BottomLine />
          <h4>React :</h4>
          <AboutTechStyles>
            <div>
              <Typical wrapper='b' steps={['Redux, Context API, FireBase']} />
            </div>
          </AboutTechStyles>
          <h4>JavaScript :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical
                wrapper='b'
                steps={['Recursion, OOP, Functional Programming, Merge Sort']}
              />
            </div>
          </AboutTechStyles>
          <h4>CSS :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical
                wrapper='b'
                steps={['SASS, Box-Model, CSS/Grid, FlexBox']}
              />
            </div>
          </AboutTechStyles>
          <h4>HTML :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical wrapper='b' steps={['HTML5 Semantic HTML']} />
            </div>
          </AboutTechStyles>
          <h4>Node.js :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical wrapper='b' steps={['Routing, APIs, Auth']} />
            </div>
          </AboutTechStyles>
          <h4>Express :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical
                wrapper='b'
                steps={['Express Routing, MiddleWare, API Creation']}
              />
            </div>
          </AboutTechStyles>
          <h4>MongoDb / Mongoose :</h4>
          <AboutTechStyles>
            <div>
              {' '}
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={['Data Shaping, Querying, Auth, Virtuals', 5000]}
              />
            </div>
          </AboutTechStyles>
        </Container>
      </section>
    </div>
  )
}
