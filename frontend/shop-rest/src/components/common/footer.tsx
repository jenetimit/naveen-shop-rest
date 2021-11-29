import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Feature",
      child : [
          { title : "COMPANY INFO", link : "/" },
          { title : "SHIPPING & POLICIES", link : "/" },
          { title : "CONTACT US", link : "/" },
          { title : "PRODUCT", link : "/" }
      ]
    },
    { id : 2, title : "About Us",
      child : [
          { title : "Contact Us", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Privacy Policy", link : "/" },
      ]
    },
  ];
  
  return (
    <>
    <section className="footer section flex flex-row" style={{backgroundColor:"#000"}}>
            <Col lg={8} className="mx-auto">
                    <Row className="mt-5 p-10">
                      <h6 className="font-semibold" style={{color:'#fff'}}>COMPANY INFO</h6>
                      <div className="mt-6">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontFamily:'cursive'}}>About Navin Creations</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Our Vision</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>FAQ</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Blog</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Contact Us</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Buisness Oppurtunities</a>
                        </Col>
                      </div>
                      <div className="mt-5 pt-10">
                        <Col>
                         <h6 className="font-semibold" style={{color:'#fff'}}>PRODUCT CATEGORIES</h6>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Custom - Made to Order</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Litile Kingdom Boys</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Litile Kingdom Girls</a>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                  <Col lg={8} className="mx-auto">
                    <Row className="mt-5 p-10">
                      <h6 className="font-semibold" style={{color:'#fff'}}>SHIPPING & POLICIES</h6>
                      <div className="mt-6">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontFamily:'cursive'}}>Payments</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Shipping Policy</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Privacy POlicy</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Terms of Use</a>
                        </Col>
                      </div>
                      <div  style={{position:'relative',top:55}}>
                      <div className="mt-20">
                        <Col>
                         <h6 className="font-semibold" style={{color:'#fff'}}>PAYMENT METHODS</h6>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Credit Cards</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Net Banking</a>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <a className="mt-30" href="/"style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>ATM & Debit cards</a>
                        </Col>
                      </div>
                      </div>
                    </Row>
                  </Col>
                  <Col lg={8} className="mx-auto">
                    <Row className="mt-5 p-10">
                      <p className="font-semibold" style={{color:'#fff'}}>CONTACT US</p>
                      <div className="mt-6">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontFamily:'cursive'}}>Navin Creations, 18/2052</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Kochupully Road, Thoppumpady</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Kochi-682005, Kerala</p>
                        </Col>
                      </div>
                      <div className="mt-8">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Customer Support timing:</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Mon-Sat 9.00 Am to 7.00 Pm</p>
                        </Col>
                      </div>
                      <div className="mt-9 pt-10">
                        <Col>
                         <p style={{color:'#fff',letterSpacing:3,borderWidth: 2,textAlign: 'center',padding: 5}}>91-735-631-6538</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Mail : info@navincreations.com</p>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                  <Col lg={8} className="mx-auto">
                    <Row className="mt-5 p-10">
                      <p className="font-semibold" style={{color:'#fff'}}>CONTACT US</p>
                      <div className="mt-6">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontFamily:'cursive'}}>Navin Creations, 18/2052</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Kochupully Road, Thoppumpady</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Kochi-682005, Kerala</p>
                        </Col>
                      </div>
                      <div className="mt-8">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Customer Support timing:</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Mon-Sat 9.00 Am to 7.00 Pm</p>
                        </Col>
                      </div>
                      <div className="mt-9 pt-10">
                        <Col>
                         <p style={{color:'#fff',letterSpacing:3,borderWidth: 2,textAlign: 'center',padding: 5}}>91-735-631-6538</p>
                        </Col>
                      </div>
                      <div className="mt-4">
                        <Col>
                        <p className="mt-30" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive'}}>Mail : info@navincreations.com</p>
                        </Col>
                      </div>
                    </Row>
                  </Col>
    </section>
    <hr className="solid" style={{backgroundColor: 'grey'}}></hr>
    <section style={{backgroundColor: '#000'}}>
        <div>
            <Col>
              <p className="mt-30 p-5" style={{color:'#fff',fontWeight:'-moz-initial',fontFamily:'cursive',textAlign: 'center'}}>Mail : info@navincreations.com</p>
            </Col>
        </div>
    </section>
  </>
  );
}
export default Footer;