import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "../assets/css/components/Banner.scss";

function Banner() {
  return (
    <>
        <div className='banner'>
            <Carousel fade>
            <Carousel.Item className='carousel' >
                <div className='carousel-1'>
                    <h1>WELCOME TO CAR CMART</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <a href='/' className='btn'>Get Started Now</a>
                </div>           
            </Carousel.Item>
            <Carousel.Item className='carousel' >
                <div className='carousel-2'>
                    <h1>FIND YOUR DREAM CAR</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <a href='/' className='btn'>Get Started Now</a>
                </div>          
            </Carousel.Item>
            <Carousel.Item className='carousel' >
                <div className='carousel-3'>
                    <h1>BEST PLACE FOR SELL CAR!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                    <a href='/' className='btn'>Get Started Now</a>
                </div>
            </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}

export default Banner;