import React from 'react'
import { AboutTechStyles } from './TechSkillContainer.styles'
import Typical from 'react-typical'

export const TechSkillContainer = () => {
  return (
    <div>
      <h4>React :</h4>
      <AboutTechStyles>
        <div>
          <Typical
            wrapper='b'
            steps={['Redux, Context API, FireBase, Hooks']}
          />
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
          <Typical wrapper='b' steps={['SASS, Box-Model, CSS/Grid, FlexBox']} />
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
            wrapper='b'
            steps={['Data Shaping, Querying, Auth, Virtuals', 5000]}
          />
        </div>
      </AboutTechStyles>
    </div>
  )
}
