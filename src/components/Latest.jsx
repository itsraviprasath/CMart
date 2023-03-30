import React from 'react'
import { Col, Row } from 'antd';
import TitleBorder from "../components/TitleBorder";
import TitleHeading from "../components/TitleHeading";
import LatestBox from "../components/LatestBox";


function Latest() {
    return (
        <>
            <section id='latest-section' className='latest-section'>
                <TitleHeading name="LATEST OFFERS" />
                <TitleBorder />
                <Row className='latest-inner'>
                    <Col lg={8} sm={24}><LatestBox carName="Toyota Prius specs" price="900" /></Col>
                    <Col lg={8} sm={24}><LatestBox carName="Audi Q7 2018" price="574" /></Col>
                    <Col lg={8} sm={24}><LatestBox carName="Audi 2021" price="745" /></Col>
                    <Col lg={8} sm={24}><LatestBox carName="Lexus GS F" price="485" /></Col>
                    <Col lg={8} sm={24}><LatestBox carName="Toyota Prius" price="360" /></Col>
                    <Col lg={8} sm={24}><LatestBox carName="2020 Ford Mustang" price="590" /></Col>
                </Row>
            </section>
        </>
    )
}

export default Latest;