import React from "react";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import TitleBorder from "../components/TitleBorder";
import TitleHeading from "../components/TitleHeading";

function Featured({ cars, name }) {
  const navigate = useNavigate();

  const navigateTo = (state) => {
    navigate(`/carDetails/`, { state });
  };

  return (
    <>
      <section id="featured-section" className="featured-section">
        <TitleHeading name="FEATURED CARS" />
        <TitleBorder />
        <Row className="featured-inner">
          {cars?.map((itm) => {
            return (
              <Col lg={8} sm={24}>
                <div className="featured-car" onClick={() => navigateTo(itm)}>
                  <div className="featured-inner">
                    <div className="tag">{"featured"}</div>
                    <div className="price-box">
                      <sup>₹</sup>
                      {itm?.price}
                      <span>lakhs</span>
                    </div>    
                      <img src={`https://karzncars.com/${itm?.images[0]}`} alt="Car" />
                  </div>
                  <div className="featured-car-details">
                    <h2>
                      <Link to="/">{itm?.model}</Link>
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
                          person
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

export default Featured;

