import React from "react";
import "./addTour.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddTour = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://still-chamber-83874.herokuapp.com/tours", data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "New Tour has been inserted",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: true,
        });
      });
    reset();
  };

  return (
    <div className="addTour">
      <Helmet>
        <title> Add New Tour </title>
      </Helmet>
      <h1 className="text-center mb-5">Add a new Tour Package</h1>

      <div className="addTourForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Provide Image Link"
            {...register("img", { required: true })}
          />
          <input
            type="number"
            placeholder="Cost of the Package"
            {...register("cost", { required: true })}
          />
          <input
            type="text"
            placeholder="Write some Description"
            {...register("des", { required: true })}
          />

          <input
            type="text"
            placeholder="Enter Place Name"
            {...register("place", { required: true })}
          />
          <input
            type="number"
            placeholder="Enter Ratings"
            {...register("rattings", {})}
          />

          <select {...register("duration", { required: true })}>
            <option value="4 Days/5 night">Duration</option>
            <option value="3 Days/4 night">3 Days/4 night</option>
            <option value="4 Days/5 night">4 Days/5 night</option>
            <option value="5 Days/6 night">5 Days/6 night</option>
            <option value="6 Days/7 night">6 Days/7 night</option>
          </select>

          <input type="submit" value="Add Tour" />
        </form>
      </div>
    </div>
  );
};

export default AddTour;
