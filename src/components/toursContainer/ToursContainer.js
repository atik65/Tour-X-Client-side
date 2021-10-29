import axios from "axios";
import React, { useEffect, useState } from "react";
import TourCard from "../tourCard/TourCard";
import "./toursContainer.css";

const ToursContainer = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://still-chamber-83874.herokuapp.com/tours")
      .then((res) => {
        setTours(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.messge);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="tours-container-header">
        <h4>Choose Your Package</h4>
        <h1>
          Select Your Best Package <br />
          For Your Travel
        </h1>
      </div>

      {loading ? (
        <div className="text-center my-5">
          <div
            className="spinner-grow text-success"
            style={{ width: "80px", height: "80px" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="tours-container">
          {tours.map((tour) => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToursContainer;
