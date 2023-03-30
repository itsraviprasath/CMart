import React from 'react'
import { Col, Row } from 'antd';
import TitleBorder from "../components/TitleBorder";
import TitleHeading from "../components/TitleHeading";
import AdvantageBox from "./AdvantageBox";


function Advantages() {
  return (
    <>
      <section className='advantages-section'>
        <TitleHeading name="OUR ADVANTAGES" />
        <TitleBorder />
        <Row className='advantage-inner'>
          <Col lg={6} sm={24}><AdvantageBox icon="verified_user" title="Highly Secured" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" /></Col>
          <Col lg={6} sm={24}><AdvantageBox icon="handshake" title="Trusted Agents" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" /></Col>
          <Col lg={6} sm={24}><AdvantageBox icon="paid" title="Get an Offer" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" /></Col>
          <Col lg={6} sm={24}><AdvantageBox icon="support_agent" title="Free Support" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the" /></Col>
        </Row>
      </section>
    </>
  )
}

export default Advantages;