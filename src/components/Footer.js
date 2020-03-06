import * as React from 'react';
import '../Home.scss';

const email = 'info@gddevltd.co.uk';
const telephone = '07809261617';

const Footer = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href={'tel: ' + telephone}>{telephone}</a>
                </li>
                <li>
                    <a href={'mailto: ' + email}>{email}</a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
