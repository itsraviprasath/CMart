import React, { useEffect } from "react";
import "../assets/css/pages/Home.scss";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Brands from "../components/Brands"
import CarTypes from "../components/CarTypes"
import Advantages from "../components/Advantages";
import Latest from "../components/Latest";
import Agent from "../components/Agent";
import Testimonial from "../components/Testimonial";
import axios from "axios";

function Home() {
  const [cars, setCars] = React.useState([]);

  const getCars = () => {
    axios
      .get("https://karzncars.com/api/v1/cars/getTopDeals")
      .then((res) => {
        setCars(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };



useEffect(() => {
  getCars();
},[])



  return (
    <>
      <section id="home-page" className="home-page">
        <Banner />
        <Featured cars={cars} />
        <Brands />
        <CarTypes />
        <Advantages />
        <Latest />
        <Agent />
        <Testimonial />
        <div className="intro-section">
          <div className="intro-section-inner">
            <h3 className="intro-text">Do You Have Questions ?</h3>
            <a href="/" className="btn btn-md">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
