import React from 'react';
import TitleBorder from "../components/TitleBorder";
import TitleHeading from "../components/TitleHeading";
import TestimonialBox from "../components/TestimonialBox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


function Testimonial() {
  return (
    <>
        <section id='testimonial-section' className='testimonial-section'>
            <div>
                <TitleHeading name="OUR TESTIMONIAL"/>
                <TitleBorder />
            </div>
            <div className='testimonial-slider'>
            <Swiper watchSlidesProgress={true} slidesPerView={2} className="mySwiper">
                <SwiperSlide className='swiper-child'>
                    <TestimonialBox name="Pitarshon Roky" role="Web Designer, Uk" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everLorem industry's standard dummy text everLorem." />
                </SwiperSlide>
                <SwiperSlide className='swiper-child'>
                    <TestimonialBox name="Maikel Alisa" role="Creative Director" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everLorem industry's standard dummy text everLorem." />
                </SwiperSlide>
                <SwiperSlide className='swiper-child'>
                    <TestimonialBox name="Creative Director, india" role="Office Manager" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everLorem industry's standard dummy text everLorem." />
                </SwiperSlide>
            </Swiper>
            </div>
        </section>      
    </>
  )
}

export default Testimonial;



