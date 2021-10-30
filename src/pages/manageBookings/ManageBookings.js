import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Swal from "sweetalert2";
import AddTour from "../../components/addTour/AddTour";
import Header from "../../components/header/Header";
import useAuth from "../../hooks/useAuth";
import "./manageBookings.css";

const ManageBookings = () => {
  const [content, setContent] = useState("allBookings");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://still-chamber-83874.herokuapp.com/bookings`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, [user.email]);

  //   handle delete
  const handleDelete = (id) => {
    const url = `https://still-chamber-83874.herokuapp.com/bookings/${id}`;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(url)
          .then((res) => {
            axios
              .get(`https://still-chamber-83874.herokuapp.com/bookings`)
              .then((res) => {
                setBookings(res.data);
                Swal.fire({
                  icon: "success",
                  title: "Your file has been deleted.",
                  showConfirmButton: false,
                  timer: 1000,
                });
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  //   handle approve
  const handleApprove = (id) => {
    const url = `https://still-chamber-83874.herokuapp.com/bookings/${id}`;

    axios
      .put(url, { status: "approved" })
      .then((res) => {
        axios
          .get(`https://still-chamber-83874.herokuapp.com/bookings`)
          .then((res) => {
            setBookings(res.data);
            Swal.fire({
              icon: "success",
              title: "Tour has been Approved.",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Header />

      <div className="mangeBookings container">
        <div className="row">
          <div className="col-md-2 mangeBookings-left">
            <button onClick={() => setContent("allBookings")}>
              All Bookings
            </button>
            <br />
            <button onClick={() => setContent("addTour")}>Add Tour</button>
          </div>
          <div className="col-md-10 mangeBookings-right">
            {content == "allBookings" ? (
              <div className="container ">
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
                  <div>
                    <h1 className="text-center">Manage All Tours </h1>

                    <div className="booking-details-container">
                      <div className="booking-details-container-inner">
                        <div className="booking-details-header">
                          <div className="row text-center mt-5 ">
                            <div className="col-3">Email</div>
                            <div className="col-2">Place</div>

                            <div className="col-2">Phone</div>
                            <div className="col-2">Status</div>
                            <div className="col-2">Approve Button</div>
                            <div className="col-1">Delete</div>
                          </div>
                        </div>

                        <hr />

                        {bookings.map((booking) => {
                          const {
                            email,
                            place,
                            date,
                            mobile,
                            status,
                            name,
                            _id,
                          } = booking;
                          return (
                            <div key={_id}>
                              <div className="row text-center my-3">
                                <div className="col-md-3 text-md-start text-center">
                                  {email}
                                </div>
                                <div className="col-md-2 ">{place}</div>
                                {/* <div className="col-md-2">{date}</div> */}
                                <div className="col-md-2">{mobile}</div>
                                <div className="col-md-2">
                                  {status == "pending" ? (
                                    <p className="bg-danger"> Pending </p>
                                  ) : (
                                    <p className="bg-success">Approved</p>
                                  )}
                                </div>
                                <div className="col-md-2 text-center">
                                  <button
                                    onClick={() => handleApprove(_id)}
                                    className="text-success"
                                  >
                                    <i class="far fa-check-circle"></i>
                                  </button>
                                </div>
                                <div className="col-md-1">
                                  <button onClick={() => handleDelete(_id)}>
                                    <i className="fas fa-trash-alt    "></i>
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <AddTour />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
