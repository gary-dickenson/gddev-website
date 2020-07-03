import * as React from 'react'
import '../styles/Footer.scss'

// const consultantName = 'Gary Dickenson'
const email = 'info@gddevltd.co.uk'
const telephone = '+44 7809261617'

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="container">
        <div id="contact-us-container" className="contact-us-container">
          <div className="contact-us-phone">
            <img src="assets/images/call.svg" alt="call" />
            <span>
              <a href={'tel: ' + telephone}>{telephone}</a>
            </span>
          </div>
          <div className="contact-us-email">
            <img src="assets/images/mailto.svg" alt="mailto" />
            <span>
              <a href={'mailto: ' + email}>{email}</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
