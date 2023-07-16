import './Footer.css';
import { Link } from "react-router-dom";
import PhoneNumberLink from './../PhoneNumberLink/PhoneNumberLink';
import EmailLink from '../EmailLink/EmailLink';

const Footer=()=>{

    return(
        <div className="footer">
      <div className="footer-section section__padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>Contact</h4>
            <EmailLink />
              <br/>
              <PhoneNumberLink />
          </div>
          <div className="footer-links-div">
            <h4>Navigation Links</h4>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/contact">
              <p>Free Quote</p>
            </Link>
            <Link to="/services">
              <p>Services</p>
            </Link>
          </div>
          {/* <div className="footer-links-div"></div> */}
          <div className="footer-links-div">
            <a href="#top">
              <p>Back to top</p>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>&#169;{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;