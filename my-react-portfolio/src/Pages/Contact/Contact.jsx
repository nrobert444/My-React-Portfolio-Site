import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { ContactA, ContactB } from './Contact.styles'

export const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div>
      <HeaderSub />
      <ContactA className='text-center py-3'>
        <div className='container'>
          <h2 className='section-title'>Contact Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Here is how you can reach me.</p>
          <form
            method='POST'
            data-netlify='true'
            data-netlify-recaptcha='true'
            noValidate
          >
            <div className='text-fields'>
              <input
                type='text'
                className='text-input name-input'
                placeholder='Name'
                autoComplete='off'
                name='name'
                value={name}
                onChange={e => setName({ name: e.target.value })}
                noValidate
              />
              <input
                type='text'
                className='text-input subject-input'
                placeholder='Subject'
                autoComplete='off'
                name='subject'
                value={subject}
                onChange={e => setSubject({ subject: e.target.value })}
                noValidate
              />
              <input
                type='email'
                className='text-input email-input'
                placeholder='Email Address'
                autoComplete='off'
                name='email'
                value={email}
                onChange={e => setEmail({ email: e.target.value })}
                noValidate
              />

              <textarea
                className='text-input message-input'
                placeholder='Enter Message'
                name='message'
                value={message}
                onChange={e => setMessage({ message: e.target.value })}
                noValidate
              ></textarea>
              <div className='my-2'>
                <div data-netlify-recaptcha='true'></div>
              </div>
            </div>
            <button type='submit' className='btn-dark'>
              Submit
            </button>
          </form>
        </div>
      </ContactA>

      <ContactB className='py-3 bg-main'>
        <div className='container'>
          <div className='contact-info'>
            <div>
              <FontAwesomeIcon className='fa-2x' icon={faEnvelope} />
              <h3>Email</h3>
              <p>n.moonrise.media@gmail.com</p>
            </div>
            <div className='dark'>
              <FontAwesomeIcon className='fa-2x' icon={faPhone} />
              <h3>Phone Number</h3>
              <p>(843)-209-7713</p>
            </div>
            <div>
              <FontAwesomeIcon className='fa-2x' icon={faAddressCard} />
              <h3>Address</h3>
              <p>5845 NE Hoyt St. Portland, OR</p>
            </div>
          </div>
        </div>
      </ContactB>
      <Footer />
    </div>
  )
}
