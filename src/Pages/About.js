import "./About.css";
import self from "../Images/jkp/self-about.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <div>
          <div className="about-container-item">
            <div className="about-img">
              <img className="about-self" src={self} alt="" />
            </div>
          </div>
        </div>
        <div className="item-description">
          <div>
            <h4>About J&K Pressure Washing</h4>
            Welcome to J&K Pressure Washing, your local and caring pressure
            washing experts! We are a family-owned business that takes immense
            pride in serving our community with top-quality cleaning solutions.
            As a small business, we truly understand the importance of
            personalized service, attention to detail, and making a positive
            impact on the lives of our customers.
          </div>
          <br />
          <hr />

          <h4>Our Story</h4>

          <div>
            At J&K Pressure Washing, we are more than just a cleaning business.
            We are a family-owned company that believes in building meaningful
            relationships with our customers. Our journey began with a desire to
            provide exceptional pressure washing services while making a
            positive impact on the lives of those around us.
          </div>
          <br />
          <hr />

          <h4>Community-Driven</h4>

          <div>
            Giving back to the community is at the heart of our business. We
            actively participate in local events and donate a portion of our
            proceeds to organizations supporting special needs individuals and
            their families. Your support allows us to make a positive impact on
            the lives of those who need it the most. Together, we can build a
            stronger and more compassionate community.
          </div>
          <br />
          <hr />

          <h4>Our Pride in Work</h4>

          <div>
            At J&K Pressure Washing, we take immense pride in what we do. Every
            pressure washing project is a canvas for us to showcase our
            expertise and attention to detail. Whether it's cleaning sidewalks,
            driveways, decks, or any other surface, we approach each task with
            dedication and passion. Our commitment to excellence ensures that
            your property will shine like new after our service.
          </div>
          <br />
          <hr />
          <h4>Customer-Centric Approach</h4>

          <div>
            We treat each client like a member of our own family. Understanding
            your unique needs and delivering beyond your expectations is our
            priority. From the moment you contact us to the completion of the
            project, we'll guide you through the process with a friendly and
            professional approach.
          </div>
          <br />
          <hr />

          <h4>Service Area</h4>

          <div>
            We are proud to serve Your community and the surrounding regions. No
            job is too big or too small for us. Whether you are a homeowner or a
            business owner, we have the expertise and equipment to get the job
            done right.
          </div>
          <br />
          <hr />

          <h4>Call Us Today!</h4>

          <div>
            Thank you for considering J&K Pressure Washing for your pressure
            washing needs. We look forward to bringing a fresh and vibrant look
            to your property while making a meaningful impact on our community.
            Contact us today for a free estimate, and let's create a cleaner,
            brighter, and better tomorrow together.
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default About;
