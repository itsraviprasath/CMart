import React from 'react';
import TestimonialAvatar1 from "../assets/images/testimonial-avatar-1.jpg"



function Testimonial(props) {
  return (
    <>
        <div className='testimonials-inner'>
            <div className='user'>
                <img className='testimonial-img' src={TestimonialAvatar1} alt='' />
            </div>
            <div className='testimonial-info'>
                <h3>{props.name}</h3>
                <p className='role'>{props.role}</p>
                <p className='about'>{props.message}</p>
                <div className='rating'>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star_half</span>
                </div>
            </div> 
        </div>    
    </>
  )
}

export default Testimonial;



