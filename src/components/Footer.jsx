import React from 'react'
import { Link } from "react-router-dom";
import '../assets/css/components/Footer.scss'
import smallCar1 from '../assets/images/small-car-3.jpg'
import smallCar2 from '../assets/images/small-car-2.jpg'
import smallCar3 from '../assets/images/small-car-1.jpg'
import { Col, Row, Input, Form, Button } from 'antd';
import { FacebookOutlined, MessageOutlined, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';


// Contact Deatils
const contacts = {
  address: '20/F Green Road, Dhanmondi, Dhaka',
  email: 'info@themevessels.com',
  phone: '+0477 85X6 552',
  fax: '+0477 85X6 552'
};

// Routing Links
const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/contact", name: "Contact" },
  { id: 3, path: "/carListing", name: "Car Listing" },
  { id: 3, path: "/services", name: "Services" },
  { id: 3, path: "/gallery", name: "Gallery" },

];

// Price Data
const data = [
  { title: 'Bentley Continental GT ', price: '$34500', date: 'Jan 12, 2021', image: smallCar3 },
  { title: 'Fiat Punto Red', price: '$34500', date: 'Aug 24, 2021', image: smallCar2 },
  { title: 'Nissan Micra Gen5', price: '34500', date: ' Sep 24, 2021', image: smallCar1 },
];


function renderRoutes() {
  return routes.map((route) => (
    <li className='footer_route'><Link style={{ color: "#BFBFBF", textDecoration: 'none' }} to={route.path} key={route.id}>
      {route.name}
    </Link></li>
  ));
}

function Footer() {
  return (

    <>
      <div className="footer">
        <div className="footer-area">
          <div className="footer_area">
            <Row>
              <Col xs={24} sm={24} md={12} lg={5} className="contact_info">
                <div className="contact_info_details">
                  <h4>CONTACT INFO</h4>
                  <ul>
                    <li><span className="material-symbols-outlined">
                      location_on
                    </span>
                      <p>{contacts.address}</p></li>
                    <li><span className="material-symbols-outlined">
                      mail
                    </span>
                      <p>{contacts.email}</p></li>
                    <li><span className="material-symbols-outlined">
                      call
                    </span>
                      <p>{contacts.phone}</p></li>
                    <li><span className="material-symbols-outlined">
                      fax
                    </span>
                      <p>{contacts.fax}</p></li>
                  </ul>
                  <div className="social_list">
                    <ul>
                      <li><FacebookOutlined className='link_icon' /></li>
                      <li><TwitterOutlined className='link_icon' /></li>
                      <li><GooglePlusOutlined className='link_icon' /></li>
                      <li><LinkedinOutlined className='link_icon' /></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={5} className='usefull_links'>
                <div className='footer_items'>
                  <h4>USEFULL LINKS</h4>
                  <ul>
                    {renderRoutes()}
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8} className='recent_posts'>
                <div className="recent_post">
                  <h4>RECENT POSTS</h4>
                  <div className="footer_card">
                    {data.map((item, index) => (
                      <div key={index} className="card_section">
                        <div className='footer_posts_images'>
                          <img src={item.image} alt="my_img" className='recent_post_cars' />
                        </div>
                        <div className="recent_posts_text">
                          <h5>{item.title}</h5>
                          <div className="listing_pricedate">
                            <p className='footer_price'>{item.price}|</p>
                            <p className='footer_date'><span className="material-symbols-outlined calander_icon">
                              calendar_month
                            </span> {item.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6} className='subscription'>
                <div className="subscribe">
                  <h4>SUBSCRIBE</h4>
                  <div className="subscribe_box">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, asperiores expedita! Placeat laudantium culpa vero laboriosam! Perferendis magnam voluptatibus voluptas consequuntur quod, delectus natus ab incidunt voluptate totam voluptatum minus.</p>
                    <Form className='conatct_form'>
                      <Input className='email_input' placeholder='Email Address...'></Input>
                      <Button className='email_button'><MessageOutlined /></Button>
                    </Form>
                    {/* <Row gutter={16} align="middle">
                      <Col span={18}>
                        <Input className='input' placeholder="Enter text" />
                      </Col>
                      <Col span={4}>
                        <Button style={{ height: '44px', padding: '0rem 2rem', backgroundColor: '#f0151f', fontSize: '16px' }} classname="icon_button" type="primary"><MessageOutlined /></Button>
                      </Col>
                    </Row> */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer