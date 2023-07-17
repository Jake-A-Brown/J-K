// import FetchGoogleReviews from '../components/FetchGoogleReviews/FetchGoogleReviews';
import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css";
import FetchGoogleReviews from "./../components/FetchGoogleReviews/FetchGoogleReviews";
import jkLogo from "../Images/jkp/logo.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="pic-container">
        <div>Revitalize Your Property with Expert Pressure
          Washing Services!</div>
          <div>At J&K Pressure Washing, we take
          pride in delivering top-notch pressure washing solutions to homeowners
          and businesses alike. With over 20 years of experience and a dedicated team,
          we're committed to restoring the beauty and cleanliness of your
          property.</div><br/>
        <div className="home-pic-item">
          <img className="home-logo-image" src={jkLogo} alt="" />
        </div><br/>
          <div>Transform your
          property's appearance and make a lasting impression on visitors and
          potential buyers.</div>
          <div>Regular pressure
          washing protects surfaces from mold, grime, and dirt, extending their
          lifespan.</div>
          <div>Eliminate harmful bacteria and
          allergens, providing a safe and healthy living space.</div>
          <div>We specialize in cleaning
          driveways, decks, fences, siding, roofs, and more, leaving your home
          or business looking pristine.</div>
          <div>  Make your business
          stand out with our professional pressure washing services for
          storefronts, parking lots, and sidewalks.</div>
          <div>Your
          satisfaction is our top priority. Our skilled technicians use advanced
          equipment and eco-friendly detergents to ensure effective yet
          environmentally responsible cleaning.</div>
          <div> Our team consists of trained and experienced pressure
          washing experts who know the best techniques for each surface.</div>
          <div>We respect your time and arrive promptly to
          complete the job efficiently.</div>
          <div>Rest easy knowing that
          we're fully insured, protecting your property and our team during
          every project.</div>
          <div>Ready to
          give your property a fresh, clean look? Contact us today for a free
          estimate!</div>
          <div>We proudly serve Your City and
          surrounding communities.</div>
          <div>Take a look at our
          before-and-after gallery to see the transformative power of our
          pressure washing services <Link to="/services">Here</Link></div>
        <div className="item-description">
        </div>
        <hr></hr>
      </div>
      <div className="bottom-text">
        <FetchGoogleReviews
          apiKey="AIzaSyAth3hKTJRf1cuXsdYGPmxCCXXvn763qsA"
          placeId="ChIJX0KPZpjZrIkRrQvvcwMWbbk"
        />
      </div>
    </div>
  );
};

export default Home;
