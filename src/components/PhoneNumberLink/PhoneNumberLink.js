import './PhoneNumberLink.css';

import React from 'react';
import { Link } from 'react-router-dom';

const PhoneNumberLink = () => {
  const phoneNumber = '919-943-3035';

  const handlePhoneCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  // const handleTextMessage = () => {
  //   const smsLink = `sms:${phoneNumber}`;
  //   window.location.href = smsLink;
  // };

  return (
    <div>
      <Link className='phone-num-link' to="#" onClick={handlePhoneCall}>
        {phoneNumber}
      </Link>
      <div>
        {/* <FontAwesomeIcon
        size='2x'
        className="text-button"
        icon={faComments}
        onClick={handleTextMessage}
        /> */}
      </div>
    </div>
  );
};

export default PhoneNumberLink;