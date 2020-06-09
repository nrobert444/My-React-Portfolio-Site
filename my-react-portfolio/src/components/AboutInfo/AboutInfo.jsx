import React from 'react'
import { AboutInfoStyles } from './AboutInfo.styles'

export const AboutInfo = () => {
  return (
    <div>
      <AboutInfoStyles>
        <img src='img/about-pic.jpg' alt='' className='bio-image' />
        <div className='bio bg-light'>
          <h4>Your Project Is In Safe Hands</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
            nesciunt unde nihil voluptatum commodi consequuntur molestiae?
            Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
            deserunt!
          </p>
        </div>
      </AboutInfoStyles>
    </div>
  )
}
