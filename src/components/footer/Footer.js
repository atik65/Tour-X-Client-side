import React from "react";
import "./footer.css";
import footer from "../../utilities/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row  mx-0">
          <div className="col-md-4 footer-one">
            <div className="footer-logo">
              <img src={footer} alt="" />
              Tour<span>X</span>
            </div>
            <p className="py-2">
              What does a travel agency do? Travel agents sell transportation,
              lodging, and admission to entertainment activities to individuals
              and groups planning trips. They offer advice on destinations, plan
              trip itineraries, and make travel arrangements for clients.
            </p>
            <h3>Follow Us:</h3>
            <p>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
              <span>
                {" "}
                <i class="fab fa-instagram    "></i>{" "}
              </span>
              <span>
                {" "}
                <i class="fab fa-twitter    "></i>{" "}
              </span>
            </p>
          </div>
          <div className="col-md-4 ps-0 ps-md-5 footer-two mt-3 mt-md-0 text-center ">
            <h3 className="pb-2">Contact Us</h3>

            <p className="py-2">
              <span>
                <i class="fas fa-phone-volume"></i>
              </span>
              010020000
            </p>

            <p className="py-2">
              <span>
                <i class="far fa-envelope"></i>
              </span>
              email@email.com
            </p>

            <p className="py-2">
              <span>
                <i class="fas fa-location-arrow"></i>
              </span>
              Willison Street <br /> Eagan, United State
            </p>
          </div>
          <div className="col-md-4 footer-three text-center text-md-end mt-3 mt-md-0">
            <h3 className=" pb-4">Support</h3>

            <p>Contact us</p>
            <p>About Us</p>
            <p>Destinations</p>
            <p>Our Blogs</p>
            <p>Package</p>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <h1 className="text-center">
          Subscribe To Our Newsletter <br />
          For Latest Update
        </h1>
        <div className="subs">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
