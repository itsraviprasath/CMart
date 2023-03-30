import React from "react";
import { useState } from "react";
import { Col, Row } from "antd";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function CarDetailBox({ carData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(carData);
  
  return (
    <>
      <div className="car-details-inner">
        <Row>
          <Col lg={16} sm={24}>
            <div className="sidebar-left">
              <div className="car-heading">
                <div className="car-name-location">
                  <h3>{carData?.model}</h3>
                  <p>
                    <span className="material-symbols-outlined">directions_car</span>
                    {carData?.brands}
                  </p>
                </div>
                <div className="price-box">
                  <h3> ₹ {carData?.price} lakhs </h3>
                  <div className="rating">
                    <span className="material-symbols-outlined rating-star">
                      star
                    </span>
                    <span className="material-symbols-outlined rating-star">
                      star
                    </span>
                    <span className="material-symbols-outlined rating-star">
                      star
                    </span>
                    <span className="material-symbols-outlined rating-star">
                      star
                    </span>
                    <span className="material-symbols-outlined rating-star">
                      star_half
                    </span>
                    <span className="rating-num">( 4.5/5 )</span>
                  </div>
                </div>
              </div>
              <div className="cardetailsslider">
                <div className="main">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {carData?.images?.map((itm) => {
                      return (
                        <SwiperSlide>
                          <img src={`https://karzncars.com/${itm}`} alt="Car" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {carData?.images?.map((itm) => {
                      return (
                        <SwiperSlide>
                          <img src={`https://karzncars.com/${itm}`} alt="Car" />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
              <div className="car-description">
                <h3>Description</h3>
                <pre>
                  {carData?.description}
                </pre>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24}>
            <div className="sidebar-right">
              <h3>Booking This Car</h3>
              <ul>
                <li>
                  <span>Make</span>{carData?.brands}
                </li>
                <li>
                  <span>Model</span>{carData?.model}
                </li>
                <li>
                  <span>Body Style</span>{carData?.types}
                </li>
                <li>
                  <span>Year</span>{carData?.year}
                </li>
                <li>
                  <span>Condition</span>{"..."}
                </li>
                <li>
                  <span>Kilometer</span>{carData?.KiloMeter} km
                </li>
                <li>
                  <span>Interior Color</span>{"..."}
                </li>
                <li>
                  <span>Transmission</span>{carData?.transmission}
                </li>
                <li>
                  <span>Engine</span>{"..."}
                </li>
                <li>
                  <span>No. of Owners</span>{carData?.NoOfOwners}
                </li>
                <li>
                  <span>Location</span>{"..."}
                </li>
                <li>
                  <span>Fuel Type</span>{carData?.fuel}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CarDetailBox;
