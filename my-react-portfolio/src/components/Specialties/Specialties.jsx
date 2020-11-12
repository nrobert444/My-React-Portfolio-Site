import React from 'react'
import { Specialize } from './Specialties.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faDesktop,
  faObjectUngroup,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

export const Specialties = () => {
  return (
    <Specialize>
      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faFileAlt} />
        <h3>Problem Solving</h3>
        <p>
          Finding creative solutions through the medium of software development
        </p>
      </div>

      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faDesktop} />
        <h3>Collaborative Develpment</h3>
        <p>
          Working within a team to achieve a shared objective and learn from
          others.
        </p>
      </div>
      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faObjectUngroup} />
        <h3>Design</h3>
        <p>Some content goes here.</p>
      </div>
      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faThumbsUp} />
        <h3>Interaction</h3>
        <p>Some content goes here.</p>
      </div>
    </Specialize>
  )
}
