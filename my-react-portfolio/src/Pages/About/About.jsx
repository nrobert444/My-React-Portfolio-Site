import React from 'react'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { AboutA, AboutB, AboutC, AboutD } from './About.styles'

export const About = () => {
  return (
    <div>
      <HeaderSub />
      {/* <!-- Section A: Info --> */}
      <AboutA class='text-center py-3'>
        <div class='container'>
          <h2 class='section-title'>About Me</h2>
          <div class='bottom-line'></div>
          <p class='lead'>
            Let me tell you a little about myself and what I do...
          </p>
          <div class='about-info'>
            <img src='img/about.jpg' alt='' class='bio-image' />
            <div class='bio bg-light'>
              <h4>Your Project Is In Safe Hands</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis nostrum, eaque velit ipsam facilis sed, quisquam
                nesciunt unde nihil voluptatum commodi consequuntur molestiae?
                Fugiat, perspiciatis reprehenderit. Architecto delectus vitae
                deserunt!
              </p>
            </div>
            <div class='award-1'>
              <i class='fas fa-award fa-3x'></i>
              <h3>Award One</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, magni!
              </p>
            </div>
            <div class='award-2'>
              <i class='fas fa-award fa-3x'></i>
              <h3>Award Two</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, magni!
              </p>
            </div>
            <div class='award-3'>
              <i class='fas fa-award fa-3x'></i>
              <h3>Award Three</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, magni!
              </p>
            </div>
          </div>
        </div>
      </AboutA>

      {/* <!-- Section B: Progress Bars --> */}
      <AboutB class='bg-dark py-3'>
        <div class='container'>
          <h2 class='section-title'></h2>
          <div class='bottom-line'></div>
          <h4>React :</h4>
          <div class='progress'>
            <div ></div>
          </div>
          <h4>JavaScript :</h4>
          <div class='progress'>
            <div ></div>
          </div>
          <h4>CSS :</h4>
          <div class='progress'>
            <div></div>
          </div>
          <h4>HTML :</h4>
          <div class='progress'>
            <div></div>
          </div>
          <h4>Node.js :</h4>
          <div class='progress'>
            <div></div>
          </div>
          <h4>Express :</h4>
          <div class='progress'>
            <div></div>
          </div>
          <h4>MongoDb / Mongoose :</h4>
          <div class='progress'>
            <div ></div>
          </div>
        </div>
      </AboutB>

      {/* <!-- Section C: logo --> */}

      <AboutC class='py-4 bg-light'>
        <div class='container'>
          <div class='about-logos'>
            <img src='img/about-logos/logo-envato.png' alt='' />
            <img src='img/about-logos/logo-magento.png' alt='' />
            <img src='img/about-logos/logo-woocommerce.png' alt='' />
            <img src='img/about-logos/logo-wordpress.png' alt='' />
          </div>
        </div>
      </AboutC>

      {/* <!-- Section D: Testimonials --> */}
      <AboutD class='py-4'>
        <div class='container'>
          <h2 class='section-title'>Testimonials</h2>
          <div class='bottom-line'></div>
          <p class='lead text-center'>Take a look at what my clients say:</p>
          <div class='testimonials'>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                magnam omnis, deserunt temporibus quasi voluptate? Animi beatae
                inventore, molestias earum illo voluptas in sed suscipit nostrum
                quam consequuntur, nisi exercitationem!
              </p>
              <ul>
                <li>
                  <img src='img/testimonials/person1.jpg' alt='' />
                </li>
                <li>Sean David, California</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                magnam omnis, deserunt temporibus quasi voluptate? Animi beatae
                inventore, molestias earum illo voluptas in sed suscipit nostrum
                quam consequuntur, nisi exercitationem!
              </p>
              <ul>
                <li>
                  <img src='img/testimonials/person2.jpg' alt='' />
                </li>
                <li>Amy Robertson, Oregon</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                magnam omnis, deserunt temporibus quasi voluptate? Animi beatae
                inventore, molestias earum illo voluptas in sed suscipit nostrum
                quam consequuntur, nisi exercitationem!
              </p>
              <ul>
                <li>
                  <img src='img/testimonials/person3.jpg' alt='' />
                </li>
                <li>Sam Smith, New York</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                magnam omnis, deserunt temporibus quasi voluptate? Animi beatae
                inventore, molestias earum illo voluptas in sed suscipit nostrum
                quam consequuntur, nisi exercitationem!
              </p>
              <ul>
                <li>
                  <img src='img/testimonials/person4.jpg' alt='' />
                </li>
                <li>Briana Nichols, South Carolina</li>
              </ul>
            </div>
          </div>
        </div>
      </AboutD>
      <Footer />
    </div>
  )
}
