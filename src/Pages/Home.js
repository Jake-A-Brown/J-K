import FetchGoogleReviews from '../components/FetchGoogleReviews/FetchGoogleReviews';
import './Home.css';

const Home =()=>{

    return(
        <div className='home-container'>
            <div><div>grab attention here</div></div>
            <br/><FetchGoogleReviews apiKey='AIzaSyAth3hKTJRf1cuXsdYGPmxCCXXvn763qsA' placeId='ChIJX0KPZpjZrIkRrQvvcwMWbbk' />
            <div><br/><br/><div>over-all before and after</div></div>
        </div>
    );
};

export default Home;