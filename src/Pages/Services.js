import "./Services.css";
import stonePatioAfter from "../Images/jkp/after-stone-patio-larger.jpg";
import duringTrl from "../Images/jkp/during-trl.jpg";
import stonePatioBefore from "../Images/jkp/before-stone-patio.jpg";
import trailerAfter from "../Images/jkp/after-trl.jpg";
import concreteBeforeAfter from "../Images/jkp/before-after-concrete.jpg";
import concreteWalkwayBeforeAfter from "../Images/jkp/concrete-walkway-before-after.jpg";
import gasStationCleaning from "../Images/jkp/gas-station-cleaning.jpg";
import sidewalkBeforeAfter from "../Images/jkp/side-walk-before-after.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-pic-container">
        <div className="services-pic-item">
          <div className="services-img">
            <img
              className="stone-patio-after-image"
              src={stonePatioBefore}
              alt=""
            />
          </div>
          <div className="services-img">
            <img
              className="stone-patio-after-image"
              src={stonePatioAfter}
              alt=""
            />
          </div>
        </div>
        <div className="services-item-description">Watch as Our Pressure Washing Experts Reveal the Original Splendor of This Stone Masoned Patio.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p> </Link>
        <div className="services-pic-item">
          <div className="services-img">
            <img className="stone-patio-after-image" src={duringTrl} alt="" />
          </div>
          <div className="services-img">
            <img
              className="stone-patio-after-image"
              src={trailerAfter}
              alt=""
            />
          </div>
        </div>
        <div className="services-item-description">Mildew, Be Gone! Witness the Incredible Transformation as Our Pressure Washing Unveils the Hidden Charm of this Mobile Home.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p></Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={concreteBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">The Power of Precision: Our Pressure Washing Experts Leave No Corner Untouched, Restoring This Concrete Walkway to Perfection.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p></Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={concreteWalkwayBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">Witness the Magic of Our Pressure Washing as it Restores These Concrete Steps to Their Former Glory.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p></Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={gasStationCleaning}
            alt=""
          />
        </div>
        <div className="services-item-description">Fueling a Fresh Look: Our Pressure Washing and Buffing Service Transforms This Gas Station, Leaving It Spotless and Inviting.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p></Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={sidewalkBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">A Clean Canvas: Discover the Power of Our Pressure Washing on This Once Blackened Sidewalk.</div><br/>
        <hr></hr>
        <Link to='/contact' className="services-label"><p className="service-p-quote"> Click for a free quote</p></Link>
      </div>
      {/* <div className='bottom-text'><FetchGoogleReviews apiKey='AIzaSyAth3hKTJRf1cuXsdYGPmxCCXXvn763qsA' placeId='ChIJX0KPZpjZrIkRrQvvcwMWbbk' /></div>  */}
    </div>
  );
};

export default Services;
