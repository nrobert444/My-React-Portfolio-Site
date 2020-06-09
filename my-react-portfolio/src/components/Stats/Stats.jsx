import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHourglassStart,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'
import { StatsStyle } from './Stats.styles'

export const Stats = () => {
  return (
    <StatsStyle>
      <div>
        <ul>
          <li className='fa-2x'>
            <FontAwesomeIcon icon={faHourglassStart} />
          </li>
          <li className='stats-title'>Hours Worked</li>
          <li className='stats-number'>800</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='fa-2x'>
            <FontAwesomeIcon icon={faCodeBranch} />
          </li>
          <li className='stats-title'>Projects Completed</li>
          <li className='stats-number'>25</li>
        </ul>
      </div>
    </StatsStyle>
  )
}
