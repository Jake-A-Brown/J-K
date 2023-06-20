import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import EmailLink from "../components/EmailLink/EmailLink";
import PhoneNumberLink from "../components/PhoneNumberLink/PhoneNumberLink";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-div">
      <div className="contact-info">
        <div className="contact-item">
          <h1>J & K Pressure Washing, LLC</h1>
          <br />
          <h2>Call, text, or email for a free quote!</h2>
          <br/>
          <h3>Email</h3>
          <div className="contact-email">
            <FontAwesomeIcon
              className="email-icon"
              icon={faEnvelope}
              size="2x"
            />
            <EmailLink />
          </div>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <PhoneNumberLink />
        </div>
        <div className="contact-item">
          <h3>Location</h3>
          <p> Hillsboro, NC</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
