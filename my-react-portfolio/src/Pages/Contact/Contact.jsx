import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { ContactA, ContactB } from './Contact.styles'
import emailjs from 'emailjs-com'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
)

const formValid = ({ formErrors, ...rest }) => {
  let valid = true

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  })

  Object.values(rest).forEach(val => {
    val === '' && (valid = false)
  })

  return valid
}

export class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
  handleSubmit = e => {
    e.preventDefault()

    if (formValid(this.state)) {
      const { name, email, subject, message } = this.state

      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
      emailjs.send(
        'service_3znnbll',
        'template_8pmdpvv',
        templateParams,
        'user_Gc6lEF3vqHjatR76h1Gvh'
      )

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `)

      this.resetForm()
    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE')
    }
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formErrors = { ...this.state.formErrors }

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : ''
        break
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : 'Please enter a valid email address.'
        break
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : ''
        break
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : ''
        break
      default:
        break
    }
    this.setState({ formErrors, [name]: value })
  }

  render() {
    const { formErrors } = this.state

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
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className='text-fields'>
                <input
                  type='text'
                  name='name'
                  className='text-input name-input'
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder='Name'
                  noValidate
                ></input>
                {formErrors.name.length > 0 && (
                  <span className='errorMessage'>{formErrors.name}</span>
                )}

                <input
                  type='email'
                  className='text-input email-input'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder='Email'
                  noValidate
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}

                <input
                  type='subject'
                  name='subject'
                  className='text-input subject-input'
                  value={this.state.subject}
                  onChange={this.handleChange}
                  placeholder='Subject'
                  noValidate
                ></input>
                {formErrors.subject.length > 0 && (
                  <span className='errorMessage'>{formErrors.subject}</span>
                )}

                <textarea
                  name='message'
                  className='text-input message-input'
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder='Message'
                  noValidate
                ></textarea>
                <div className='my-2'>
                  <div data-netlify-recaptcha='true'></div>
                </div>
                {formErrors.message.length > 0 && (
                  <span className='errorMessage'>{formErrors.message}</span>
                )}
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
}

export default ContactPage
