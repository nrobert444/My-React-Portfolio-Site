import React from 'react'
import { Specialize } from './Specialties.styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faDesktop,
  faObjectUngroup,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

export const Specialties = () => {
  return (
    <Specialize>
      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faFileAlt} />
        <h3>Concepting</h3>
        <p>Some content goes here.</p>
      </div>
      <div>
        <FontAwesomeIcon className='fas fa-2x' icon={faDesktop} />
        <h3>UI/UX</h3>
        <p>Some content goes here.</p>
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
