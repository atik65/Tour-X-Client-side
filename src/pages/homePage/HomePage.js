import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import ToursContainer from "../../components/toursContainer/ToursContainer";
import WhyTourX from "../../components/whyTourX/WhyTourX.js";
import "./homePage.css";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ToursContainer />
      <WhyTourX />
      <Footer />
    </div>
  );
};

export default HomePage;
