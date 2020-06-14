import * as React from 'react';
import '../styles/Footer.scss';

const email = 'info@gddevltd.co.uk';
const telephone = '07809261617';

const Footer = () => {
    return (
        <div className="grid-container footer-container">
            <div className="grid-container contact-us-container">
                <div className="grid-item contact-us-method">
                    <div className="grid-item"><img src="/public/images/call.svg" alt="call"/></div>
                    <div className="grid-item">call:</div>
                    <div className="grid-item"><a href={'tel: ' + telephone}>{telephone}</a></div>
                </div>

                <div className="grid-item"><img src="/public/images/mailto.svg" alt="mailto"/></div>
                <div className="grid-item">email:</div>
                <div className="grid-item"><a href={'mailto: ' + email}>{email}</a></div>
            </div>
        </div>
    );
};

export default Footer;