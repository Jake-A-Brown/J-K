import './PhoneNumberLink.css';

import React from 'react';
import { Link } from 'react-router-dom';

const PhoneNumberLink = () => {
  const phoneNumber = '919-943-3035';

  const handlePhoneCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const handleTextMessage = () => {
    const smsLink = `sms:${phoneNumber}`;
    window.location.href = smsLink;
  };

  return (
    <div>
      <Link to="#" onClick={handlePhoneCall}>
        Call {phoneNumber} Or
      </Link>
      <button className="text-button" onClick={handleTextMessage}>
        Text
      </button>
    </div>
  );
};

export default PhoneNumberLink;