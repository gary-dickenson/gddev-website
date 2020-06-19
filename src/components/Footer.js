import * as React from 'react'
import '../styles/Footer.scss'

// const consultantName = 'Gary Dickenson'
const email = 'info@gddevltd.co.uk'
const telephone = '07809261617'

const Footer = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-item">
        <img src="/public/images/call.svg" alt="call"/>
        <span><a href={'tel: ' + telephone}>{telephone}</a></span>
      </div>
      <div className="contact-us-item">
        <img src="/public/images/mailto.svg" alt="mailto"/>
        <span><a href={'mailto: ' + email}>{email}</a></span>
      </div>    </div>
  )
}

export default Footer
