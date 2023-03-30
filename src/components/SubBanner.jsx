import React from 'react'
import "../assets/css/components/SubBanner.scss"

function HeroSection(props) {
  return (
    <>
      <section id='sub-banner' className='sub-banner'>
        <div className='breadcrumb-area'>
          <h1>{props.page}</h1>
          <p><span>Home</span> / {props.page}</p>
        </div>
      </section>
    </>
  )
}

export default HeroSection;