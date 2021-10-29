import React from "react";
import "./slider.css";
import slider1 from "../../utilities/slider/hills.jpg";
import slider2 from "../../utilities/slider/hills2.jpg";
import slider3 from "../../utilities/slider/ice.jpg";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="slider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
            <div className=" d-none d-md-block carousel-text">
              <div className="carousel-text-inner">
                <h1>
                  Amazing Tour <br />
                  in Finland
                </h1>
                <h2>7 Days, 8 Night Tour</h2>
                <NavLink className="tour-explore" to="/alltours">
                  {" "}
                  Explore our Tour Packages{" "}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
            <div className="caption d-none d-md-block carousel-text">
              <div className="carousel-text-inner">
                <h1>
                  Amazing Tour <br />
                  in Africa
                </h1>
                <h2> 5 Days, 6 Night Tour</h2>
                <NavLink className="tour-explore" to="/alltours">
                  <span> Explore our Tour Packages </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
            <div className="d-none d-md-block carousel-text">
              <div className="carousel-text-inner">
                <h1>
                  Amazing Tour <br />
                  in Madahascar
                </h1>
                <h2>7 Days, 8 Night Tour</h2>
                <NavLink className="tour-explore" to="/alltours">
                  {" "}
                  Explore our Tour Packages{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
