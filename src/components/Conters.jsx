import React from 'react'
import { Col, Row } from 'antd';
import SingleCounter from "./SingleCounter";


function Conters() {
  return (
    <>
      <section id='counters-section' className='counters-section'>
        <Row className='counters-coloumn'>
          <Col lg={6} sm={24}><SingleCounter icon="directions_car" number="967" text="Lorem Ipsum" /></Col>
          <Col lg={6} sm={24}><SingleCounter icon="rate_review" number="1276" text="Lorem Ipsum" /></Col>
          <Col lg={6} sm={24}><SingleCounter icon="account_circle" number="396" text="Lorem Ipsum" /></Col>
          <Col lg={6} sm={24}><SingleCounter icon="workspace_premium" number="177" text="Lorem Ipsum" /></Col>
        </Row>
      </section>
  </>
  )
}

export default Conters;