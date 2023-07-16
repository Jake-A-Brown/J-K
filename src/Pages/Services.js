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
        <div className="services-item-description">Item Description 1</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free quote</Link>
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
        <div className="services-item-description">Item Description 2</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free quote</Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={concreteBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">Item Description 3</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free  quote</Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={concreteWalkwayBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">Item Description 4</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free  quote</Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={gasStationCleaning}
            alt=""
          />
        </div>
        <div className="services-item-description">Item Description 5</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free  quote</Link>
        <div className="services-pic-item">
          <img
            className="stone-patio-after-image"
            src={sidewalkBeforeAfter}
            alt=""
          />
        </div>
        <div className="services-item-description">Item Description 6</div>
        <hr></hr>
        <Link to='/contact' className="services-label">Click for a free  quote</Link>
      </div>
      {/* <div className='bottom-text'><FetchGoogleReviews apiKey='AIzaSyAth3hKTJRf1cuXsdYGPmxCCXXvn763qsA' placeId='ChIJX0KPZpjZrIkRrQvvcwMWbbk' /></div>  */}
    </div>
  );
};

export default Services;
