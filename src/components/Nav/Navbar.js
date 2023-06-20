import './Navbar.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from 'react';
import CLogO from './JKnew.png';

const Navbar = () => {

    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  
    const navToggle = () => {
      setActive((prevActive) => (prevActive === "nav__menu" ? "nav__menu nav__active" : "nav__menu"));
      setToggleIcon((prevToggleIcon) => (prevToggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"));
    };

    return(
        <nav className="nav">
        <Link to="/" className="site-title">
        <img src={CLogO} alt="Company logo" className='clogo'/>{/*Site Name */}
        </Link>
        <ul className={active}>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/services">Services</CustomLink>
          <CustomLink to="/">Home</CustomLink>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
          </Link>
      </li>
    );
  };

export default Navbar;