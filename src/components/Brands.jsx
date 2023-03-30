import React, { useEffect } from 'react'
import "../assets/css/components/Brands.scss"
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

function Brands() {

// API Fetching
const [brands, setBrands] = React.useState([]);

const getBrands = () => {
  axios
    .get("https://karzncars.com/api/v1/cars/getBrandsAndTypes?type=brands")
    .then((res) => {
      setBrands(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  getBrands();
},[])

  return (
    <>
      <section id='brands-section' className='brands-section'>
        <TitleHeading name="OUR BRANDS" />
        <TitleBorder />
        <div>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={80}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
        {brands.map((itm) => {
          return (
            <div className='swiper-slide'>
              <SwiperSlide>
                <img className='brand-img' src={`https://karzncars.com/${itm?.image}`} alt='brand' />
                <h4>{itm?.brandname}</h4>
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

export default Brands;