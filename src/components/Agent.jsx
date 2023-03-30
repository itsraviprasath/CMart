import React from 'react'
import { Col, Row } from 'antd';
import TitleBorder from "./TitleBorder";
import TitleHeading from "./TitleHeading";
import AgentBox from "../components/AgentBox";
import Avatar1 from "../assets/images/avatar-1.jpg";
import Avatar2 from "../assets/images/avatar-2.jpg";
import Avatar3 from "../assets/images/avatar-3.jpg";
import Avatar4 from "../assets/images/avatar-4.jpg";


function Agent() {
  return (
    <>
      <section className='agent-section'>
        <TitleHeading name="OUR AGENT"/>
        <TitleBorder />
        <Row className='agent-inner'>
            <Col lg={6} sm={24}><AgentBox avatar={Avatar1} name="Michelle Nelson" role="Support Manager" /></Col>
            <Col lg={6} sm={24}><AgentBox avatar={Avatar2} name="Martin Smith" role="Web Developer" /></Col>
            <Col lg={6} sm={24}><AgentBox avatar={Avatar3} name="Carolyn Stone" role="Creative Director" /></Col>
            <Col lg={6} sm={24}><AgentBox avatar={Avatar4} name="Brandon Miller" role="Manager" /></Col>
        </Row>
      </section>
  </>
  )
}

export default Agent;