import React, { useEffect } from 'react'
import "../assets/css/components/CarTypes.scss"
import TitleBorder from "./TitleBorder";
import TitleHeading from "./TitleHeading";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

function CarTypes() {

// API Fetching
const [types, setTypes] = React.useState([]);

const getTypes = () => {
  axios
    .get("https://karzncars.com/api/v1/cars/getBrandsAndTypes?type=types")
    .then((res) => {
      setTypes(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
    getTypes();
},[])

  return (
    <>
      <section id='types-section' className='types-section'>
        <TitleHeading name="OUR TYPES" />
        <TitleBorder />
        <div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={80}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
        {types.map((itm) => {
          return (
            <div className='swiper-slide'>
              <SwiperSlide>
                <img className='type-img' src={`https://karzncars.com/${itm?.image}`} alt='type' />
                <h4>{itm?.typename}</h4>
              </SwiperSlide>
          </div>
          );
        })}
        </Swiper>
        </div>
      </section>
    </>
  )
}

export default CarTypes;