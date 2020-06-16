import React from 'react'
import {
  ProcessContainer,
  ProcessIcon,
  ProcessStep,
  WordContainer
} from './process.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faDesktop,
  faObjectUngroup,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

export const Process = () => {
  return (
    <ProcessContainer>
      <div>
        <ProcessIcon className='fas fa-4x my-2'>
          <FontAwesomeIcon icon={faFileAlt} />
          <ProcessStep>1</ProcessStep>
        </ProcessIcon>
        <WordContainer>
          <h3>Discuss the project</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam minus accusamus porro dicta ducimus.
          </p>
        </WordContainer>
      </div>
      <div>
        <ProcessIcon className=' fas fa-4x my-2'>
          <FontAwesomeIcon icon={faDesktop} />
          <ProcessStep>2</ProcessStep>
        </ProcessIcon>
        <WordContainer>
          <h3>Brainstorming ^ Concepts</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam minus accusamus porro dicta ducimus.
          </p>
        </WordContainer>
      </div>
      <div>
        <ProcessIcon className='fas fa-4x my-2'>
          <FontAwesomeIcon icon={faObjectUngroup} />
          <ProcessStep>3</ProcessStep>
        </ProcessIcon>
        <WordContainer>
          <h3>UI/UX Planning</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam minus accusamus porro dicta ducimus.
          </p>
        </WordContainer>
      </div>
      <div>
        <ProcessIcon className='fas fa-4x my-2'>
          <FontAwesomeIcon icon={faThumbsUp} />
          <ProcessStep>4</ProcessStep>
        </ProcessIcon>
        <WordContainer>
          <h3>Interaction</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            numquam minus accusamus porro dicta ducimus.
          </p>
        </WordContainer>
      </div>
    </ProcessContainer>
  )
}
