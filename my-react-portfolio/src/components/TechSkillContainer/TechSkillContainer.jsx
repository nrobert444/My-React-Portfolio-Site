import React from 'react'
import { AboutTechStyles } from './TechSkillContainer.styles'

export const TechSkillContainer = () => {
  return (
    <div>
      <h4>React :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>
              Redux | Context API | Hooks | Class/Functional Components
            </strong>
          </p>
        </div>
      </AboutTechStyles>
      <h4>JavaScript :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>OOP | Functional Programming | ES5 | ES6 + </strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <h4>HTML :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>HTML5 Semantic HTML</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <h4>CSS :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>SASS | CSS/Grid | FlexBox</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <h4>Node/Express :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>Routing | MiddleWare | REST | Auth</strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
      <h4>MongoDb / Mongoose :</h4>
      <AboutTechStyles>
        <div>
          <p>
            <strong>
              Querying | Auth | Virtuals | Schemas | Atlas/Compass
            </strong>{' '}
          </p>
        </div>
      </AboutTechStyles>
    </div>
  )
}
