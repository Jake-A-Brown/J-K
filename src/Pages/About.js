import "./About.css";
import self from '../Images/jkp/self.jpg';
import setupBuild from '../Images/jkp/setup-build.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
      <div>
        <div className="about-container-item">
        <div className="about-img">
        <img className="stone-patio-after-image" src={setupBuild} alt="" />
        </div>
          <div className="about-img">
        <img className="about-self" src={self} alt="" />
        </div>
        </div>
      </div>
      <div className="item-description">Item Description</div>
          <hr></hr>
          </div>
    </div>
  );
};

export default About;
