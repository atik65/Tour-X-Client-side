import React from "react";
import "./whyTourX.css";

const WhyTourX = () => {
  return (
    <div className="whyTourX">
      <div className="text-center pt-5">
        <h3>Why TourX</h3>
        <h1>
          Why You Are Travel With <br /> Tourx
        </h1>
      </div>

      <div className="container">
        <div className="card-container-whyTourX">
          <div data-aos="zoom-in-up" className="card-item-whyTourX">
            <p>
              <i className="fas fa-user-tie"></i>
            </p>
            <h4>
              2000+ Our <br />
              worldwide guide
            </h4>
          </div>
          <div data-aos="zoom-in-up" className="card-item-whyTourX">
            <p>
              <i className="far fa-handshake"></i>
            </p>
            <h4>
              100% trusted travel <br />
              agency
            </h4>
          </div>
          <div data-aos="zoom-in-up" className="card-item-whyTourX">
            <p>
              <i className="fas fa-user-graduate"></i>
            </p>
            <h4>
              10+ year of travel <br />
              experience
            </h4>
          </div>
          <div data-aos="zoom-in-up" className="card-item-whyTourX">
            <p>
              <i className="far fa-smile-wink"></i>
            </p>
            <h4>
              90% of our traveller <br /> happy
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTourX;
