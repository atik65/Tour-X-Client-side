import React from "react";
import { useHistory } from "react-router";
import "./tourCard.css";

const TourCard = ({ tour }) => {
  const { _id, cost, des, duration, img, place, rattings } = tour;

  const history = useHistory();

  const hanldeClick = () => {
    history.push(`/placeorder/${_id}`);
  };

  return (
    <div data-aos="zoom-in-up" className="tour-card" onClick={hanldeClick}>
      <div className="row">
        <div className="col-md-5">
          <img src={img} alt="" />
        </div>
        <div className="col-md-7 mt-2 mt-md-0 pe-3 pt-2 pb-4 pb-md-0 ps-4">
          <small className="d-block d-md-inline mb-2 mb-md-0 cost">
            {" "}
            ${cost}/Per Person
          </small>
          <small className="ms-0 ms-md-5 calendar">
            <span className="pe-2">
              <i className="far fa-calendar-alt"></i>
            </span>

            {duration}
          </small>
          <h4 className="my-2 place">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>{" "}
            {place}
          </h4>

          <small className="rating">
            <span>
              <i className="fas fa-star"></i>
            </span>{" "}
            {rattings}+ Rating
          </small>
        </div>
      </div>

      <div className="des">{des}</div>
    </div>
  );
};

export default TourCard;
