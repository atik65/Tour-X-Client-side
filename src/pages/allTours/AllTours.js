import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TourCard from "../../components/tourCard/TourCard";
import "./allTours.css";

const AllTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://still-chamber-83874.herokuapp.com/tours")
      .then((res) => {
        setTours(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Header />

      <div className="allTours">
        <h1 className="text-center">
          Explore our Tour Packages <br />
          and Choose Yours
        </h1>

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
          <div className="allToursContainer container ">
            {tours.map((tour) => (
              <TourCard tour={tour} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllTours;