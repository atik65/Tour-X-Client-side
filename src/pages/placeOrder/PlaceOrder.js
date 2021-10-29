import axios from "axios";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import Header from "../../components/header/Header";
import TourCard from "../../components/tourCard/TourCard";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import "./placeOrder.css";
const PlaceOrder = () => {
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://still-chamber-83874.herokuapp.com/tours/${id}`)
      .then((res) => {
        setTour(res.data);
        setLoading(false);
        setValue("email", user.email);
        setValue("name", user.displayName);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  }, []);

  setValue("place", tour.place);

  const onSubmit = (data) => {
    data.status = "pending";

    axios
      .post("https://still-chamber-83874.herokuapp.com/bookings", data)
      .then((res) => {
        if (res.status === 200) {
          reset();
          history.push("/");
          Swal.fire("congratulations!", "Tour booked Successfully!", "success");
        }
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire("Opps!", "Something went Wrong!", "error");
      });
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-grow text-success"
          style={{ width: "80px", height: "80px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="container placeOrder">
        <div className="row">
          <h1 className="text-center">Book Your Tour</h1>
          <div className="col-md-6 placeOrder-right mb-4 mt-md-0 ps-2 pe-md-5">
            <TourCard tour={tour} />
          </div>

          <div className="col-md-6 placeOrder-left mb-5 mb-md-0">
            <form className=" mt-5" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                {...register("mobile", { maxLength: 12 })}
              />
              <input
                type="text"
                placeholder="place"
                {...register("place", { required: true })}
              />
              <input type="date" placeholder="date" {...register("date", {})} />

              <input type="submit" value="Book Tour" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
