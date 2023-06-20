import React from 'react';
// import './Emaillink.css';
import { Link } from "react-router-dom";

const EmailLink = () => {
  const email = 'jamesd.robertson53@gmail.com';
  const subject = 'Get a free quote!';
  const body = '';

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Link className='email-link' to="#" onClick={handleClick}>
      <div>jamesd.robertson53@gmail.com</div>
    </Link>
  );
};

export default EmailLink;