import React from 'react'
import Header from '../../components/HeaderMain/Header'
import { Footer } from '../../components/Footer/Footer'
import { HomeA, HomeB, HomeC } from './Home.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faDesktop,
  faObjectUngroup,
  faThumbsUp,
  faUsers,
  faHourglassStart,
  faAward,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <div>
      <Header />

      <HomeA className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>I Specialize In</h2>
          <div className='bottom-line'></div>
        </div>
        <p className='lead'>
          Full-stack Software development. Add more content.
        </p>
        <div className='specials'>
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
        </div>
      </HomeA>

      <HomeB className='text-center py-2'>
        <div className='stats'>
          <div>
            <ul>
              <li className='fa-2x'>
                <FontAwesomeIcon icon={faUsers} />
              </li>
              <li className='stats-title'>Clients</li>
              <li className='stats-number'>100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='fa-2x'>
                <FontAwesomeIcon icon={faAward} />
              </li>
              <li className='stats-title'>Awards</li>
              <li className='stats-number'>3</li>
            </ul>
          </div>
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
        </div>
      </HomeB>

      <HomeC className='text-center py-2'>
        <div className='container'>
          <h2 className='section-title'>My Creative Process</h2>
          <div className='bottom-line'></div>
          <p className='lead'>
            All of my UI/UX and design projects are based off of a practiced
            formula to get the result that I am looking for.
          </p>
          <div className='process'>
            <div>
              <div className='fas fa-4x process-icon my-2'>
                <FontAwesomeIcon icon={faFileAlt} />
                <div className='process-step'>1</div>
              </div>
                <h3>Discuss the project</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                numquam minus accusamus porro dicta ducimus.
              </p>
            </div>
            <div>
              <div className=' fas fa-4x process-icon my-2'>
                <FontAwesomeIcon icon={faDesktop} />
                <div className='process-step'>2</div>
              </div>
              <h3>Brainstorming ^ Concepts</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                numquam minus accusamus porro dicta ducimus.
              </p>
            </div>
            <div>
              <div className='fas fa-4x process-icon my-2'>
                <FontAwesomeIcon icon={faObjectUngroup} />
                <div className='process-step'>2</div>
              </div>
              <h3>UI/UX Planning</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                numquam minus accusamus porro dicta ducimus.
              </p>
            </div>
            <div>
              <div className='fas fa-4x process-icon my-2'>
                <FontAwesomeIcon icon={faThumbsUp} />
                <div className='process-step'>2</div>
              </div>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                numquam minus accusamus porro dicta ducimus.
              </p>
            </div>
          </div>
        </div>
      </HomeC>
      <Footer />
    </div>
  )
}
