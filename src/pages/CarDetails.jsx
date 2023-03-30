import React from 'react'
import Subbanner from "../components/SubBanner";
import "../assets/css/pages/CarDetails.scss"
import CarDetailBox from "../components/CarDetailBox";
import { useLocation } from 'react-router-dom';

function CarDetails() {
  const {state} = useLocation();
  console.log(state , 'location');
  return (
    <>
      <section id='car-details' className='car-details'>
        <Subbanner page="CAR DETAILS" />
        <CarDetailBox carData={state} />
      </section>
    </>
  )
}

export default CarDetails;