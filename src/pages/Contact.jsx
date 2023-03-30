import React from 'react'
import { Col, Row, Input, Button } from 'antd';
import '../assets/css/pages/Contact.scss'
import SubBanner from "../components/SubBanner";
import TitleBorder from '../components/TitleBorder';
import TitleHeading from '../components/TitleHeading'
import GoogleMapReact from 'google-map-react';


const contacts = {
    address: '20/F Green Road, Dhanmondi, Dhaka',
    email: 'info@themevessels.com',
    phone: '+0477 85X6 552',
    fax: '+0477 85X6 552'
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <>
            <SubBanner page="Contact Us" />
            <div className="contact">
                <div className="contact_area">
                    <div className="conatct_main_area">
                        <div className="main_title text_center">
                            <TitleHeading name="GET IN TOUCH" />
                            <TitleBorder className='border' />
                        </div>
                        <div className="bg_white">
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={14} span={12}>
                                    <div className="contact_form">
                                        <h3>Send Us a Message</h3>
                                        <form>
                                            <Row gutter={[16, 32]} className="row">
                                                <Col lg={12}>
                                                    <Input placeholder="Enter your name" />
                                                </Col>
                                                <Col lg={12}>
                                                    <Input placeholder="Enter your name" />
                                                </Col>
                                                <Col lg={12}>
                                                    <Input placeholder="Enter your name" />
                                                </Col>
                                                <Col lg={12}>
                                                    <Input placeholder="Enter your name" />
                                                </Col>
                                                <Col lg={24}>
                                                    <Input.TextArea placeholder='Write Message' />
                                                </Col>
                                                <Col lg={24}>
                                                    <Button className='contact_button'>SEND MESSAGE</Button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={10} span={12}>
                                    <div className='contact_details_outer'>
                                        <div className="contact_details_area">
                                            <h3>Opening Hours</h3>
                                            <div className="box_icon">
                                                <div className="contact_icon">
                                                    <span className="material-symbols-outlined">
                                                        location_on
                                                    </span>
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Office Address</h4>
                                                    <p>{contacts.address}</p>
                                                </div>
                                            </div>
                                            <div className="box_icon">
                                                <div className="contact_icon">
                                                    <span className="material-symbols-outlined">
                                                        mail
                                                    </span>
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Email</h4>
                                                    <p>{contacts.email}</p>
                                                </div>
                                            </div>
                                            <div className="box_icon">
                                                <div className="contact_icon">
                                                    <span className="material-symbols-outlined">
                                                        call
                                                    </span>
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Phone Number</h4>
                                                    <p>{contacts.phone}</p>
                                                </div>
                                            </div>
                                            <div className="box_icon">
                                                <div className="contact_icon">
                                                    <span className="material-symbols-outlined">
                                                        fax
                                                    </span>
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Fax</h4>
                                                    <p>{contacts.fax}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                </div>
            </div>
            <div className='map' style={{ height: '350px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}
export default Contact

