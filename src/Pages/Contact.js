// Contact.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone, faComments, faLocationDot, faMapPin } from "@fortawesome/free-solid-svg-icons";
import EmailLink from "../components/EmailLink/EmailLink";
import PhoneNumberLink from "../components/PhoneNumberLink/PhoneNumberLink";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the solid icon to the library
library.add(faEnvelopeOpenText);

const Contact = () => {
  const phoneNumber = '919-943-3035';
  const email = 'jamesd.robertson53@gmail.com';
  const subject = 'Get a free quote!';
  const body = '';

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const handleTextMessage = () => {
    const smsLink = `sms:${phoneNumber}`;
    window.location.href = smsLink;
  };

  return (
    <div className="contact-div">
      <div className="contact-info">
        <div className="contact-item">
          <h1>J & K Pressure Washing, LLC</h1>
          <br />
          <h2>Call, text, or email for a free quote!</h2>
          <br />
          <FontAwesomeIcon
            className="text-button"
            size='2x'
            icon={faPhone}
            onClick={handlePhoneCall}
            style={{ color: 'dodgerblue' }}
          />
          <span /> <span /> <span />
          <FontAwesomeIcon
            size='2x'
            className="text-button"
            icon={faComments}
            onClick={handleTextMessage}
          />
          <PhoneNumberLink />
          <div className="contact-phone">
            <div className="email-icon">
              <FontAwesomeIcon
                className="email-icon"
                size="2x"
                icon={faEnvelopeOpenText}
                onClick={handleClick}
              />
            </div>
            <EmailLink />
          </div>
        </div>
        <div className="contact-item">
          <h3 className="locations-heading">Servicing These Locations <FontAwesomeIcon className="location-icon" icon={faLocationDot}/></h3>
          <div className="location-group">
            <ul className="locations-list">
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Durham
              </li>
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Raleigh
              </li>
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Chapel Hill
              </li>
              {/* Add other locations as needed */}
            </ul>
          </div>

          <div className="location-group">
            <ul className="locations-list">
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Greensboro
              </li>
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Burlington
              </li>
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Elon
              </li>
              <li className="location-item">
                <FontAwesomeIcon className="location-icon" icon={faMapPin } />
                Hillsborough
              </li>
              {/* Add other locations as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
