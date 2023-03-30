import React, { useEffect } from 'react'
import { Col, Row } from 'antd';
import "../assets/css/pages/About.scss";
import Car from "../assets/images/welcome-car.jpg";
import SubBanner from "../components/SubBanner";
import TitleBorder from "../components/TitleBorder";
import TitleHeading from "../components/TitleHeading";
import Advantages from "../components/Advantages";
import Agent from "../components/Agent";
import Conters from "../components/Conters";
import Testimonial from "../components/Testimonial";

function About() {
  function demo() {
    console.log("demo");
    console.log("demo2");
  }
  useEffect(
    () => {
      demo()
    }
  )
  return (
    <>
      <SubBanner page="About Us" />
      {/* About Car Mart */}
      <section id='about-car' className='about-car'>
        <Row justify="center" align="middle">
          <Col lg={12} sm={24}>
            <div className='car-img-box'>
              <img className='car-img' src={Car} alt='Car' />
            </div>
          </Col>
          <Col lg={12} sm={24}>
            <div className='about-car-inner'>
              <div className='about-car-text'>
                <TitleHeading name="WELCOME TO CAR CMART"/>
                <TitleBorder />
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
                <p>morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled</p>
            </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* About Car Mart */}
      <Advantages />
      <Agent />
      <Conters />
      <Testimonial />
  </>
  )
}

export default About;