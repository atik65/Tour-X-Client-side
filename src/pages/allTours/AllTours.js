import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TourCard from "../../components/tourCard/TourCard";
import "./allTours.css";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title> All Tours </title>
      </Helmet>
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
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllTours;
