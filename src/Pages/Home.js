// import FetchGoogleReviews from '../components/FetchGoogleReviews/FetchGoogleReviews';
import React from 'react';
import './Home.css';
import FetchGoogleReviews from './../components/FetchGoogleReviews/FetchGoogleReviews';
import jkLogo from '../Images/jkp/logo.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='pic-container'>
        {/* <div className='about-pic-item'> 
          <img className='stone-patio-after-image' src={stonePatioAfter} alt='' />
          <div className='item-description'>Item Description</div>
          <hr></hr>
        </div> */}
        <div className='home-pic-item'>
          <img className='home-logo-image' src={jkLogo} alt='' />
        </div>
        <div className='item-description'>Item Description</div>
          <hr></hr>
      </div>
       <div className='bottom-text'><FetchGoogleReviews apiKey='AIzaSyAth3hKTJRf1cuXsdYGPmxCCXXvn763qsA' placeId='ChIJX0KPZpjZrIkRrQvvcwMWbbk' /></div> 
    </div>
  );
};

export default Home;
