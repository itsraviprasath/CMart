import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import Subbanner from "../components/SubBanner";
import axios from "axios";
import "../assets/css/pages/CarListing.scss";

function CarListing() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const getCars = () => {
    axios
      .post("https://karzncars.com/api/v1/cars/getCars?limit=250")
      .then((res) => {
        console.log(res.data);
        setCars(res.data?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateTo = (state) => {
    navigate(`/carDetails/`, { state });
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <>
      <Subbanner page="CAR LIST" />
      <section id="featured-section" className="featured-section">
        <Row className="featured-inner">
          {cars?.map((itm) => {
            return (
              <Col lg={8} sm={24}>
                <div className="featured-car" onClick={() => navigateTo(itm)}>
                  <div className="featured-inner">
                    <div className="tag">{itm?.status}</div>
                    <div className="price-box">
                      <sup>₹</sup>
                      {itm?.price}
                      <span>lakhs</span>
                    </div>
                      <img
                        src={`https://karzncars.com/${itm?.images[0]}`}
                        alt="Car"
                      />
                  </div>
                  <div className="featured-car-details">
                    <h2>
                      {itm?.model}
                    </h2>
                    <div className="location-div">
                      <span className="location-icon material-symbols-outlined">
                        directions_car
                      </span>
                      <p>{itm?.brands}</p>
                    </div>
                    <ul>
                      <li>
                        <span className="material-symbols-outlined facilities-icon">
                          add_road
                        </span>{" "}
                        {itm?.KiloMeter} km
                      </li>
                      <li>
                        <span className="material-symbols-outlined facilities-icon">
                          multiple_stop
                        </span>{" "}
                        {itm?.types}
                      </li>
                      <li>
                       <span className="material-symbols-outlined facilities-icon">
                          calendar_month
                        </span>{" "}
                        {itm?.year}
                      </li>
                      <li>
                       <span className="material-symbols-outlined facilities-icon">
                          humidity_high
                        </span>{" "}
                        {itm.fuel}
                      </li>
                      <li>
                      <span className="material-symbols-outlined facilities-icon">
                          auto_mode
                        </span>{" "}
                        {itm.transmission}
                      </li>
                      <li>
                        <span className="material-symbols-outlined facilities-icon">
                          palette
                        </span>{" "}
                        {itm?.NoOfOwners}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
    </>
  );
}

export default CarListing;